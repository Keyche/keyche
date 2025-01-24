package com.keyche.client.controller;

import com.keyche.client.service.RedisService;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/keys")
public class KeyDBController {

    private RedisTemplate<String, Object> redisTemplate;

    private final RedisService redisService;

    public KeyDBController(RedisService redisService) {
        this.redisService = redisService;
    }

    @GetMapping
    public Object getAllKeys(@RequestParam String host, @RequestParam int port) {
        redisTemplate = redisService.getConnection(host, port);
        return redisTemplate.keys("*");
    }

    @PostMapping
    public void addKey(@RequestParam String key, @RequestParam String value, @RequestParam String host, @RequestParam int port) {
        redisTemplate = redisService.getConnection(host, port);
        if (redisTemplate == null) {
            throw new RuntimeException("RedisTemplate is null for host: " + host + " and port: " + port);
        }
        redisTemplate.opsForValue().set(key, value);
    }

    @GetMapping("/{key}")
    public Object getKey(@PathVariable String key, @RequestParam String host, @RequestParam int port) {
        redisTemplate = redisService.getConnection(host, port);
        if (redisTemplate == null) {
            throw new RuntimeException("RedisTemplate is null for host: " + host + " and port: " + port);
        }
        return redisTemplate.opsForValue().get(key);
    }

    @DeleteMapping("/{key}")
    public void deleteKey(@PathVariable String key, @RequestParam String host, @RequestParam int port) {
        redisTemplate = redisService.getConnection(host, port);
        redisTemplate.delete(key);
    }


}

