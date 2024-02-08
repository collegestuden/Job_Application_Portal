package com.example.demo.service;

import com.example.demo.dto.appdto;
import com.example.demo.mapper.appmapper;
import com.example.demo.model.appmodel;
import com.example.demo.repository.apprepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class appservice {

    private final apprepo appRepo;
    private final appmapper appMapper;

    @Autowired
    public appservice(apprepo appRepo, appmapper appMapper) {
        this.appRepo = appRepo;
        this.appMapper = appMapper;
    }

    public List<appdto> getAllApps() {
        List<appmodel> apps = appRepo.findAll();
        return apps.stream().map(appMapper::mapToAppDto).collect(Collectors.toList());
    }

    public Optional<appdto> getAppById(Long appId) {
        Optional<appmodel> app = appRepo.findById(appId);
        return app.map(appMapper::mapToAppDto);
    }

    public appdto createApp(appdto appDto) {
        appmodel appModel = appMapper.mapToAppModel(appDto);
        appModel = appRepo.save(appModel);
        return appMapper.mapToAppDto(appModel);
    }

    public appdto updateApp(Long appId, appdto updatedAppDto) {
        Optional<appmodel> existingAppOptional = appRepo.findById(appId);
        if (existingAppOptional.isPresent()) {
            appmodel existingApp = existingAppOptional.get();
            appmodel updatedAppModel = appMapper.mapToAppModel(updatedAppDto);
            // Set the updated values to the existing app model
            existingApp.setFirstName(updatedAppModel.getFirstName());
            existingApp.setLastName(updatedAppModel.getLastName());
            existingApp.setEmail(updatedAppModel.getEmail());
            existingApp.setPhoneNumber(updatedAppModel.getPhoneNumber());
            existingApp.setAddress(updatedAppModel.getAddress());
            existingApp.setEmploymentType(updatedAppModel.getEmploymentType());
            existingApp.setResume(updatedAppModel.getResume());
            existingApp.setEducation(updatedAppModel.getEducation());

            updatedAppModel = appRepo.save(existingApp);
            return appMapper.mapToAppDto(updatedAppModel);
        }
        return null;
    }

    public void deleteApp(Long appId) {
        appRepo.deleteById(appId);
    }
}
