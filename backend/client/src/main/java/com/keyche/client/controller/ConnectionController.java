package com.keyche.client.controller;

import com.keyche.client.dto.RedisConnectionRequest;
import com.keyche.client.service.RedisService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/connection")
public class ConnectionController {

    private final RedisService redisService;

    public ConnectionController(RedisService redisService) {
        this.redisService = redisService;
    }

    @PostMapping("/connect")
    public ResponseEntity<?> connectToRedis(@RequestBody RedisConnectionRequest request) {
        try {
            redisService.addConnection(request.getHost(), request.getPort(), request.getPassword());
            return ResponseEntity.ok(Map.of("message", "Connected to Redis successfully!"));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(Map.of("error", e.getMessage()));
        }
    }

    @GetMapping("/list")
    public ResponseEntity<?> listConnections() {
        return ResponseEntity.ok(redisService.listConnections());
    }

    @DeleteMapping("/disconnect")
    public ResponseEntity<?> disconnectFromRedis(@RequestParam String host, @RequestParam int port) {
        try {
            redisService.closeConnection(host, port);
            return ResponseEntity.ok(Map.of("message", "Disconnected from Redis!"));
        } catch (Exception e) {
            return ResponseEntity.badRequest().body(Map.of("error", e.getMessage()));
        }
    }
}

