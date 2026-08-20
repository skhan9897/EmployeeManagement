package com.bank.employeemanagement.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class EmployeeController {



    @GetMapping("/Hello")
    public String hello(){

        return "hello world";

    }




}
