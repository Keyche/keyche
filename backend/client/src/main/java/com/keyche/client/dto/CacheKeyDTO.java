package com.keyche.client.dto;

import lombok.Data;

@Data
public class CacheKeyDTO {

    private String cacheType;

    private String host;

    private int port;

    private String key;

    private String value;
}
