package com.example.demo.mapper;

import com.example.demo.dto.jobdto;
import com.example.demo.model.jobmodel;

public class jobmapper {

    public static jobdto mapToJobDto(jobmodel job) {
        jobdto dto = new jobdto();
        dto.setJobtitle(job.getJobtitle());
        dto.setJobdescription(job.getJobdescription());
        dto.setJobsalary(job.getJobsalary());
        dto.setGender(job.getGender());
        dto.setLocation(job.getLocation());
        dto.setJobtype(job.getJobtype());
        dto.setExperience(job.getExperience());
        dto.setImageurl(job.getImageurl());
        // Map other properties as needed
        return dto;
    }

    public static jobmodel mapToJobModel(jobdto jobDto) {
        jobmodel model = new jobmodel();
        model.setJobtitle(jobDto.getJobtitle());
        model.setJobdescription(jobDto.getJobdescription());
        model.setJobsalary(jobDto.getJobsalary());
        model.setGender(jobDto.getGender());
        model.setLocation(jobDto.getLocation());
        model.setJobtype(jobDto.getJobtype());
        model.setExperience(jobDto.getExperience());
        model.setImageurl(jobDto.getImageurl());
        // Map other properties as needed
        return model;
    }

    public static void updateJobModel(jobmodel existingJob, jobdto updatedJobDto) {
        // Update only the fields that should be updated
        existingJob.setJobtitle(updatedJobDto.getJobtitle());
        existingJob.setJobdescription(updatedJobDto.getJobdescription());
        existingJob.setJobsalary(updatedJobDto.getJobsalary());
        existingJob.setGender(updatedJobDto.getGender());
        existingJob.setLocation(updatedJobDto.getLocation());
        existingJob.setJobtype(updatedJobDto.getJobtype());
        existingJob.setExperience(updatedJobDto.getExperience());
        existingJob.setImageurl(updatedJobDto.getImageurl());
        // Update other properties as needed
    }
}
