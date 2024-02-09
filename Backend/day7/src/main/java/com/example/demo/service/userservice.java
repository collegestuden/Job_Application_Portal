package com.example.demo.service;



import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.Users;
import com.example.demo.repository.UserRepo;



@Service
public class userservice {
    @Autowired
    UserRepo ur;
     
     
     public boolean AddUser(Users ue)
     {
          ur.save(ue);
          return true;
     }
     public List<Users> getUser()
     {
          return ur.findAll();
     }
     public Optional<Users> getById(String id)
     {
    	 return ur.findById(id);
     }
}
