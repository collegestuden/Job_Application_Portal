package com.example.demo.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "job_details")
public class jobmodel {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "jobtitle", nullable = false)
    private String jobtitle;

    @Column(name = "jobdescription", nullable = false)
    private String jobdescription;

    @Column(name = "jobsalary", nullable = false)
    private double jobsalary;

    @Column(name = "gender")
    private String gender;

    @Column(name = "location")
    private String location;

    @Column(name = "jobtype")
    private String jobtype;

    @Column(name = "experience")
    private int experience;

    @Column(name = "imageurl")
    private String imageurl;

    // Add getters and setters here

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getJobtitle() {
        return jobtitle;
    }

    public void setJobtitle(String jobtitle) {
        this.jobtitle = jobtitle;
    }

    public String getJobdescription() {
        return jobdescription;
    }

    public void setJobdescription(String jobdescription) {
        this.jobdescription = jobdescription;
    }

    public double getJobsalary() {
        return jobsalary;
    }

    public void setJobsalary(double jobsalary) {
        this.jobsalary = jobsalary;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public String getJobtype() {
        return jobtype;
    }

    public void setJobtype(String jobtype) {
        this.jobtype = jobtype;
    }

    public int getExperience() {
        return experience;
    }

    public void setExperience(int experience) {
        this.experience = experience;
    }

    public String getImageurl() {
        return imageurl;
    }

    public void setImageurl(String imageurl) {
        this.imageurl = imageurl;
    }
}
