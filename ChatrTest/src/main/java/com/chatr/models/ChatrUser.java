package com.chatr.models;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

import org.springframework.stereotype.Indexed;

@Entity
@Table(name = "ChatrUser")
@Indexed
public class ChatrUser {

	@Id
	@GeneratedValue
	private int cid;
	@Column(name = "username", nullable = false)
	private String chatruser;
	@Column(name = "password", nullable = false)
	private String passWord;
	
	public ChatrUser() {
		// TODO Auto-generated constructor stub
	}

	public ChatrUser(int cid, String chatruser, String passWord) {
		super();
		this.cid = cid;
		this.chatruser = chatruser;
		this.passWord = passWord;
	}

	public int getCid() {
		return cid;
	}

	public void setCid(int cid) {
		this.cid = cid;
	}

	public String getChatruser() {
		return chatruser;
	}

	public void setChatruser(String chatruser) {
		this.chatruser = chatruser;
	}

	public String getPassWord() {
		return passWord;
	}

	public void setPassWord(String passWord) {
		this.passWord = passWord;
	}

	@Override
	public String toString() {
		return "ChatrUser [cid=" + cid + ", chatruser=" + chatruser + ", passWord=" + passWord + "]";
	}

}