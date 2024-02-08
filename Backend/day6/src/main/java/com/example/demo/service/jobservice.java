package com.example.demo.service;

import com.example.demo.dto.jobdto;
import com.example.demo.mapper.jobmapper;
import com.example.demo.model.jobmodel;
import com.example.demo.repository.jobrepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class jobservice {

    private final jobrepo jobRepo;

    @Autowired
    public jobservice(jobrepo jobRepo) {
        this.jobRepo = jobRepo;
    }

    public List<jobdto> getAllJobs() {
        List<jobmodel> jobs = jobRepo.findAll();
        return jobs.stream().map(jobmapper::mapToJobDto).collect(Collectors.toList());
    }

    public Optional<jobdto> getJobById(Long jobId) {
        Optional<jobmodel> job = jobRepo.findById(jobId);
        return job.map(jobmapper::mapToJobDto);
    }

    public jobdto createJob(jobdto jobDto) {
        jobmodel jobModel = jobmapper.mapToJobModel(jobDto);
        jobModel = jobRepo.save(jobModel);
        return jobmapper.mapToJobDto(jobModel);
    }

    public jobdto updateJob(Long jobId, jobdto updatedJobDto) {
        Optional<jobmodel> existingJobOptional = jobRepo.findById(jobId);

        if (existingJobOptional.isPresent()) {
            jobmodel existingJob = existingJobOptional.get();

            // Map updatedJobDto to existingJob, updating only the fields that should be updated
            jobmapper.updateJobModel(existingJob, updatedJobDto);

            existingJob = jobRepo.save(existingJob);
            return jobmapper.mapToJobDto(existingJob);
        }

        return null;
    }

    public void deleteJob(Long jobId) {
        jobRepo.deleteById(jobId);
    }
}
