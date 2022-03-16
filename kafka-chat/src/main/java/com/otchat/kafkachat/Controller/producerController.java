package com.otchat.kafkachat.Controller;

import com.otchat.kafkachat.model.Message;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.kafka.core.KafkaTemplate;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("otchat")
public class producerController {

    @Autowired
    private KafkaTemplate<String, Message> kafkaTemplate;
    private static final String Topic = "Test1";

    @GetMapping("/publish/{content}")
    public String post(@PathVariable("content") final String content){
        kafkaTemplate.send(Topic,new Message("Rajeev",content));
        return "Published Message";
    }
}
