package com.chatr.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.chatr.models.ChatrUser;
import com.chatr.models.Message;
import com.chatr.service.ChatrService;

@CrossOrigin
@RestController
public class ChatrController {
	 
	@Autowired
	private ChatrService service;
	
	@GetMapping("/")
	public String helloWorld() {
		return "Hello world";
	}
	
	@PostMapping("/add")
	public ChatrUser registerUser(@RequestBody ChatrUser user) {
		System.out.println(user.toString());
		return service.registerUser(user);
	}
	
	@PostMapping("/login")
	public List<ChatrUser> login(@RequestBody ChatrUser user) {
		System.out.println("User in controller :: " + user.toString());
		return service.login(user);
	}
	
	@GetMapping("/search/{chatruser}")
	public List<Message> getMessagesByUsername(@PathVariable String chatruser) {
		return service.getMessagesByUsername(chatruser);
	}
}
