package com.keyche.client.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.data.redis.connection.lettuce.LettuceConnectionFactory;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.data.redis.serializer.StringRedisSerializer;

@Configuration
public class RedisConfig {

    public LettuceConnectionFactory createLettuceConnectionFactory(String host, int port, String password) {
        LettuceConnectionFactory factory = new LettuceConnectionFactory(host, port);
        if (password != null && !password.isEmpty()) {
            factory.setPassword(password);
        }
        factory.afterPropertiesSet(); // Initialize the connection factory
        return factory;
    }

    public RedisTemplate<String, Object> createRedisTemplate(String host, int port, String password) {
        LettuceConnectionFactory connectionFactory = createLettuceConnectionFactory(host, port, password);

        RedisTemplate<String, Object> template = new RedisTemplate<>();
        template.setConnectionFactory(connectionFactory);
        template.setKeySerializer(new StringRedisSerializer());
        template.setValueSerializer(new StringRedisSerializer());

        // Call afterPropertiesSet() to ensure initialization
        template.afterPropertiesSet();
        return template;
    }
}
