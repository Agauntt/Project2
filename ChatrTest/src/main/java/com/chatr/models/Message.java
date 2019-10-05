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
	private int ownerId;
	
	public Message() {
		// TODO Auto-generated constructor stub
	}

	public Message(int mid, String message, int ownerId) {
		super();
		this.mid = mid;
		this.message = message;
		this.ownerId = ownerId;
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

	public int getOwnerId() {
		return ownerId;
	}

	public void setOwnerId(int ownerId) {
		this.ownerId = ownerId;
	}

	@Override
	public String toString() {
		return "Message [mid=" + mid + ", message=" + message + ", ownerId=" + ownerId + "]";
	}
	
}
