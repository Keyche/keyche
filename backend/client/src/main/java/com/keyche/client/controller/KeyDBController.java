package com.keyche.client.controller;

import com.keyche.client.dto.CacheKeyDTO;
import com.keyche.client.service.RedisService;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

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
    public void addKey(@RequestBody CacheKeyDTO cacheKeyDTO) {
        redisTemplate = redisService.getConnection(cacheKeyDTO.getHost(), cacheKeyDTO.getPort());
        if (redisTemplate == null) {
            throw new RuntimeException("RedisTemplate is null for host: " + cacheKeyDTO.getHost() + " and port: " + cacheKeyDTO.getPort());
        }
        redisTemplate.opsForValue().set(cacheKeyDTO.getKey(), cacheKeyDTO.getValue());
    }

    @GetMapping("/{key}")
    public Map<String, Object> getKey(@PathVariable String key, @RequestParam String host, @RequestParam int port) {
        return redisService.getKeyDetails(key, host, port);
    }

    @DeleteMapping("/{key}")
    public void deleteKey(@PathVariable String key, @RequestParam String host, @RequestParam int port) {
        redisTemplate = redisService.getConnection(host, port);
        redisTemplate.delete(key);
    }


}

