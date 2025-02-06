package com.keyche.client.dto;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class ConnectionDTO {

    private String cacheType;

    private String host;

    private int port;

    private String alias;

}
