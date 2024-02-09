package com.example.demo.controller;

import com.example.demo.dto.appdto;
import com.example.demo.service.appservice;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/apps")
public class appcontroller {

    private final appservice appService;

    @Autowired
    public appcontroller(appservice appService) {
        this.appService = appService;
    }

    @GetMapping
    public ResponseEntity<List<appdto>> getAllApps() {
        List<appdto> apps = appService.getAllApps();
        return ResponseEntity.ok(apps);
    }

    @GetMapping("/{id}")
    public ResponseEntity<appdto> getAppById(@PathVariable("id") Long appId) {
        Optional<appdto> app = appService.getAppById(appId);
        return app.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping
    public ResponseEntity<appdto> createApp(@RequestBody appdto appDto) {
        appdto createdApp = appService.createApp(appDto);
        return new ResponseEntity<>(createdApp, HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<appdto> updateApp(@PathVariable("id") Long appId, @RequestBody appdto updatedAppDto) {
        appdto updatedApp = appService.updateApp(appId, updatedAppDto);
        return updatedApp != null ? ResponseEntity.ok(updatedApp) : ResponseEntity.notFound().build();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteApp(@PathVariable("id") Long appId) {
        appService.deleteApp(appId);
        return ResponseEntity.noContent().build();
    }
}
