package com.chatr.service;

import com.chatr.models.Message;

import java.util.List;

import com.chatr.models.ChatrUser;


public interface ChatrService {
	
	public ChatrUser registerUser(ChatrUser user);
	public Message createMsg(Message msg);
	public ChatrUser login(ChatrUser user);
	
}
