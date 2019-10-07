package com.chatr.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.chatr.dao.UserRepository;
import com.chatr.models.Message;
import com.chatr.models.ChatrUser;
import com.chatr.service.ChatrService;

@Service
public class ChatrServiceImpl implements ChatrService{

	@Autowired
	UserRepository userRepo;
	
	@Override
	public ChatrUser registerUser(ChatrUser user) {
		System.out.println("registering user -- " + user.toString());
		return userRepo.save(user);
	}

	@Override
	public Message createMsg(Message msg) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public ChatrUser login(ChatrUser user) {
		System.out.println("User in serviceImpl :: " + user.toString());
		return userRepo.findByChatruser(user.getChatruser());
	}

}
