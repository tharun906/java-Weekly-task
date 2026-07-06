package com.example.employee_task.controller;


import java.util.List;

import com.example.employee_task.entity.Employee;
import com.example.employee_task.repository.EmployeeRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/employees")
public class EmployeeController {

    @Autowired
    private EmployeeRepository employeeRepository;

    @GetMapping
    public List<Employee> getAllEmployees() {
        return employeeRepository.findAll();
    }

@PostMapping
public ResponseEntity<String> createEmployee(@RequestBody Employee employee) {
    Employee savedEmployee = employeeRepository.save(employee);
    return ResponseEntity.ok("GOOD BYE ");
}
    
}
