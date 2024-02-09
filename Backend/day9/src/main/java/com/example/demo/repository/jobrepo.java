package com.example.demo.repository;

import com.example.demo.model.jobmodel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface jobrepo extends JpaRepository<jobmodel, Long> {
    // You can add custom query methods if needed
}
