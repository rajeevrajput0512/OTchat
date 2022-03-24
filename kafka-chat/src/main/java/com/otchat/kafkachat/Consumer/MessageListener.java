package com.otchat.kafkachat.Consumer;

import com.otchat.kafkachat.model.Message;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.kafka.annotation.KafkaListener;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Component;



@Component
public class MessageListener {
    @Autowired
    SimpMessagingTemplate template;

    @KafkaListener(
            topics = "kafka-chat-3",
            groupId = "kafka-sandbox"
    )
    public void listen(Message message){
        System.out.println("sending message via kafka listener....");
        template.convertAndSend("/topic/group",message);
    }
}
