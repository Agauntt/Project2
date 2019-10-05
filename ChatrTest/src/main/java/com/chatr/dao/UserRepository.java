package com.chatr.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
//import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.chatr.models.ChatrUser;

@Repository
public interface UserRepository extends JpaRepository<ChatrUser, Integer>{
	
//	@Query("Select c FROM chatr_user WHERE username = ?1")
    List<ChatrUser>UsernameIn(String username);
}
