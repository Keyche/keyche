package com.keyche.client.dto;

import lombok.Data;
import org.springframework.data.redis.core.RedisTemplate;

@Data
public class ConnectionMetadata {

    private RedisTemplate<String, Object> redisTemplate;
    private ConnectionDTO connectionDetails;

    public ConnectionMetadata(RedisTemplate<String, Object> redisTemplate, ConnectionDTO connectionDetails) {
        this.redisTemplate = redisTemplate;
        this.connectionDetails = connectionDetails;
    }
}
