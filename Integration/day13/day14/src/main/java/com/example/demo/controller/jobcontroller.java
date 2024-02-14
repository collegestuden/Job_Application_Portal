package com.example.demo.controller;

import com.example.demo.dto.jobdto;
import com.example.demo.service.jobservice;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
public class jobcontroller {

    private final jobservice jobService;

    @Autowired
    public jobcontroller(jobservice jobService) {
        this.jobService = jobService;
    }

    @GetMapping("/getjobs")
    public ResponseEntity<List<jobdto>> getAllJobs() {
        List<jobdto> jobs = jobService.getAllJobs();
        return ResponseEntity.ok(jobs);
    }

    @GetMapping("/{id}")
    public ResponseEntity<jobdto> getJobById(@PathVariable("id") Long jobId) {
        Optional<jobdto> job = jobService.getJobById(jobId);
        return job.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping("/post")
    public ResponseEntity<jobdto> createJob(@RequestBody jobdto jobDto) {
        jobdto createdJob = jobService.createJob(jobDto);
        return new ResponseEntity<>(createdJob, HttpStatus.CREATED);
    }

    @PutMapping("/put/{id}")
    public ResponseEntity<jobdto> updateJob(@PathVariable("id") Long jobId, @RequestBody jobdto updatedJobDto) {
        jobdto updatedJob = jobService.updateJob(jobId, updatedJobDto);
        return updatedJob != null ? ResponseEntity.ok(updatedJob) : ResponseEntity.notFound().build();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteJob(@PathVariable("id") Long jobId) {
        jobService.deleteJob(jobId);
        return ResponseEntity.noContent().build();
    }
}
