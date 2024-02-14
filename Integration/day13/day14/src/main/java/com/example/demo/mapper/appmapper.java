package com.example.demo.mapper;

import com.example.demo.dto.appdto;
import com.example.demo.model.appmodel;
import org.springframework.stereotype.Component;

@Component
public class appmapper {

    public appdto mapToAppDto(appmodel appModel) {
        appdto appDto = new appdto();
        appDto.setFirstName(appModel.getFirstName());
        appDto.setLastName(appModel.getLastName());
        appDto.setEmail(appModel.getEmail());
        appDto.setPhoneNumber(appModel.getPhoneNumber());
        appDto.setAddress(appModel.getAddress());
        appDto.setEmploymentType(appModel.getEmploymentType());
        
        appDto.setEducation(appModel.getEducation());
        return appDto;
    }

    public appmodel mapToAppModel(appdto appDto) {
        appmodel appModel = new appmodel();
        appModel.setFirstName(appDto.getFirstName());
        appModel.setLastName(appDto.getLastName());
        appModel.setEmail(appDto.getEmail());
        appModel.setPhoneNumber(appDto.getPhoneNumber());
        appModel.setAddress(appDto.getAddress());
        appModel.setEmploymentType(appDto.getEmploymentType());
        
        appModel.setEducation(appDto.getEducation());
        return appModel;
    }
}
