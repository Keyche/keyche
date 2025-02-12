package com.keyche.client.dto;

import lombok.Data;

@Data
public class RedisConnectionRequest {
    private String host;
    private int port;
    private String password;
    private String cacheType;
    private String alias;
}

