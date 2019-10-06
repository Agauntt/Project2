package com.chatr.models;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

import org.springframework.stereotype.Indexed;

@Entity
@Table(name = "Message")
@Indexed
public class Message {
	
	@Id
	@GeneratedValue
	private int mid;
	@Column
	private String message;
	private String sender;
    private MessageType type;

	
    public enum MessageType {
        CHAT,
        JOIN,
        LEAVE
    }
    
	public Message() {
		// TODO Auto-generated constructor stub
	}

	public Message(int mid, String message, String sender) {
		super();
		this.mid = mid;
		this.message = message;
		this.sender = sender;
	}

	 public MessageType getType() {
	        return type;
	    }

	 public void setType(MessageType type) {
	        this.type = type;
	 }
	        
	public int getMid() {
		return mid;
	}

	public void setMid(int mid) {
		this.mid = mid;
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

	public String getSender() {
		return sender;
	}

	public void setSender(String sender) {
		this.sender = sender;
	}

	@Override
	public String toString() {
		return "Message [mid=" + mid + ", message=" + message + ", sender=" + sender + "]";
	}
	
}
