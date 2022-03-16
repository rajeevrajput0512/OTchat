package com.otchat.kafkachat.Configuration;

import com.otchat.kafkachat.model.Message;
import org.apache.kafka.clients.producer.ProducerConfig;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.kafka.annotation.EnableKafka;
import org.springframework.kafka.core.DefaultKafkaProducerFactory;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.kafka.core.ProducerFactory;
import org.apache.kafka.common.serialization.StringSerializer;
import org.springframework.kafka.support.serializer.JsonSerializer;

import java.util.HashMap;
import java.util.Map;

@EnableKafka
@Configuration
public class ProducerConfiguration {

    @Bean
    public Map<String , Object> producerConfiguration(){
        Map<String , Object> configure = new HashMap<>();
        configure.put(ProducerConfig.BOOTSTRAP_SERVERS_CONFIG,"localhost:9092");
        configure.put(ProducerConfig.KEY_SERIALIZER_CLASS_CONFIG, StringSerializer.class);
        configure.put(ProducerConfig.VALUE_SERIALIZER_CLASS_CONFIG, JsonSerializer.class);
        return configure;

    }
    @Bean
    public ProducerFactory<String , Message> producerFactory(){
        return new DefaultKafkaProducerFactory<>(producerConfiguration());
    }

    @Bean
    public KafkaTemplate<String,Message> kafkaTemplate(){
        return new KafkaTemplate<>(producerFactory());
    }
}
