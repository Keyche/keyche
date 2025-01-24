package com.keyche.client.service;

import com.keyche.client.config.RedisConfig;
import org.springframework.stereotype.Service;
import org.springframework.data.redis.core.RedisTemplate;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

@Service
public class RedisService {

    private final RedisConfig redisConfig;
    private final Map<String, RedisTemplate<String, Object>> connections = new ConcurrentHashMap<>();

    public RedisService(RedisConfig redisConfig) {
        this.redisConfig = redisConfig;
    }

    public void addConnection(String host, int port, String password) {
        String connectionKey = host + ":" + port;

        if (connections.containsKey(connectionKey)) {
            throw new RuntimeException("Connection already exists for " + connectionKey);
        }

        RedisTemplate<String, Object> redisTemplate = redisConfig.createRedisTemplate(host, port, password);
        connections.put(connectionKey, redisTemplate);
    }

    public RedisTemplate<String, Object> getConnection(String host, int port) {
        String connectionKey = host + ":" + port;

        if (!connections.containsKey(connectionKey)) {
            throw new RuntimeException("No connection found for " + connectionKey);
        }

        return connections.get(connectionKey);
    }

    public List<String> listConnections() {
        return new ArrayList<>(connections.keySet());
    }

    public void closeConnection(String host, int port) {
        String connectionKey = host + ":" + port;

        if (connections.containsKey(connectionKey)) {
            connections.remove(connectionKey);
        }
    }
}

