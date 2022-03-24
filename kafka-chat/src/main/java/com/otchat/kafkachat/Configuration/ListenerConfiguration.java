package com.otchat.kafkachat.Configuration;

import com.otchat.kafkachat.model.Message;
import org.apache.kafka.clients.consumer.ConsumerConfig;
import org.apache.kafka.common.serialization.StringDeserializer;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.kafka.annotation.EnableKafka;
import org.springframework.kafka.config.ConcurrentKafkaListenerContainerFactory;
import org.springframework.kafka.core.ConsumerFactory;
import org.springframework.kafka.core.DefaultKafkaConsumerFactory;
import org.springframework.kafka.support.serializer.JsonDeserializer;

import java.util.HashMap;
import java.util.Map;

@EnableKafka
@Configuration
public class ListenerConfiguration {

    @Bean
    public Map<String , Object> consumerConfiguration(){
        Map<String , Object> configuraions = new HashMap<>();
        configuraions.put(ConsumerConfig.BOOTSTRAP_SERVERS_CONFIG,"localhost:9092");
        configuraions.put(ConsumerConfig.GROUP_ID_CONFIG,"kafka-sandbox");
        configuraions.put(ConsumerConfig.KEY_DESERIALIZER_CLASS_CONFIG, StringDeserializer.class);
        configuraions.put(ConsumerConfig.VALUE_DESERIALIZER_CLASS_CONFIG, JsonDeserializer.class);
        configuraions.put(ConsumerConfig.AUTO_OFFSET_RESET_CONFIG,"latest");
        return configuraions;
    }
    @Bean
    public ConsumerFactory<String,Message> consumerFactory(){
        return new DefaultKafkaConsumerFactory<>(consumerConfiguration(),new StringDeserializer(), new JsonDeserializer<>(Message.class));
    }
    @Bean
    ConcurrentKafkaListenerContainerFactory<String , Message> kafkaListenerContainerFactory(){
        ConcurrentKafkaListenerContainerFactory<String,Message> factory = new ConcurrentKafkaListenerContainerFactory<>();
        factory.setConsumerFactory(consumerFactory());
        return factory;
    }
}
