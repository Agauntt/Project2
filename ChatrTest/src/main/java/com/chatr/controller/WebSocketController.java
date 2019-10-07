package com.chatr.controller;

import java.text.SimpleDateFormat;
import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.handler.annotation.Payload;
import org.springframework.messaging.handler.annotation.SendTo;
import org.springframework.messaging.simp.SimpMessageHeaderAccessor;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Controller;

import com.chatr.models.Message;

@Controller
public class WebSocketController {

//	private final SimpMessagingTemplate template;
//	
//	@Autowired
//	public WebSocketController(SimpMessagingTemplate template) {
//		this.template = template;
//	}
//	
//	@MessageMapping("/send/message")
//	public void onReveivedMessage(String message) {
//		this.template.convertAndSend("/chat", new SimpleDateFormat("HH:mm:ss").format(new Date())+ " - "+message);
//	}
    @MessageMapping("/chat.sendMessage")
    @SendTo("/topic/public")
    public Message sendMessage(@Payload Message chatMessage) {
    	System.out.println("Content of sent message" + chatMessage);
        return chatMessage;
    }

    @MessageMapping("/chat.addUser")
    @SendTo("/topic/public")
    public Message addUser(@Payload Message chatMessage, SimpMessageHeaderAccessor headerAccessor) {
        // Add username in web socket session
    	System.out.println("Inside add user function");
    	System.out.println(chatMessage);
        headerAccessor.getSessionAttributes().put("username", chatMessage.getSender());
        return chatMessage;
    }
}
