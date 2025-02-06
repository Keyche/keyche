package com.keyche.client.service;

import com.keyche.client.config.RedisConfig;
import com.keyche.client.dto.ConnectionDTO;
import com.keyche.client.dto.ConnectionMetadata;
import com.keyche.client.dto.RedisConnectionRequest;
import org.springframework.data.redis.core.script.DefaultRedisScript;
import org.springframework.stereotype.Service;
import org.springframework.data.redis.core.RedisTemplate;

import java.util.*;
import java.util.concurrent.ConcurrentHashMap;
import java.util.stream.Collectors;

@Service
public class RedisService {

    private final RedisConfig redisConfig;
    private final Map<String, ConnectionMetadata> connections = new ConcurrentHashMap<>();

    public RedisService(RedisConfig redisConfig) {
        this.redisConfig = redisConfig;
    }

    public void addConnection(RedisConnectionRequest request) {
        String connectionKey = request.getHost() + ":" + request.getPort();

        if (!connections.containsKey(connectionKey)) {
            RedisTemplate<String, Object> redisTemplate = redisConfig.createRedisTemplate(request.getHost(), request.getPort(), request.getPassword());
            if (redisTemplate == null || redisTemplate.getConnectionFactory() == null) {
                throw new RuntimeException("No connection found for " + connectionKey);
            }
            redisTemplate.getConnectionFactory().getConnection().ping();
            connections.put(connectionKey,
                    new ConnectionMetadata(redisTemplate,
                            new ConnectionDTO(request.getCacheType(), request.getHost(), request.getPort(), request.getAlias())));
        }
    }

    public RedisTemplate<String, Object> getConnection(String host, int port) {
        String connectionKey = host + ":" + port;

        if (!connections.containsKey(connectionKey)) {
            throw new RuntimeException("No connection found for " + connectionKey);
        }

        return connections.get(connectionKey).getRedisTemplate();
    }

    public List<ConnectionDTO> listConnections() {
        return connections.values() // Get all ConnectionMetadata objects from the map
                .stream()  // Convert to a stream
                .map(ConnectionMetadata::getConnectionDetails) // Extract ConnectionDTO from each ConnectionMetadata
                .collect(Collectors.toList());
    }

    public void closeConnection(String host, int port) {
        String connectionKey = host + ":" + port;

        if (connections.containsKey(connectionKey)) {
            connections.remove(connectionKey);
        }
    }

    public Map<String, Object> getKeyDetails(String key, String host, int port) {

        RedisTemplate<String, Object> redisTemplate = getConnection(host, port);

        if (redisTemplate == null) {
            throw new RuntimeException("RedisTemplate is null for host: " + host + " and port: " + port);
        }
        // Lua script to fetch value, type, TTL, and size in a single call
        String luaScript =
                "local val = redis.call('GET', KEYS[1]) " + // Get value (only for string keys)
                        "local typ = redis.call('TYPE', KEYS[1])['ok'] " + // Get type
                        "local ttl = redis.call('TTL', KEYS[1]) " + // Get TTL
                        "local size = redis.call('STRLEN', KEYS[1]) " + // Get size
                        "return {val, typ, ttl, size}";

        DefaultRedisScript<List> script = new DefaultRedisScript<>();
        script.setScriptText(luaScript);
        script.setResultType(List.class);

        List<Object> result = redisTemplate.execute(script, Collections.singletonList(key));

        Map<String, Object> details = new HashMap<>();
        details.put("key", key);  // Value
        details.put("value", result.get(0));  // Value
        details.put("type", result.get(1));   // Type
        details.put("ttl", result.get(2));    // TTL
        details.put("size", result.get(3));   // Size (for strings)

        return details;
    }
}

