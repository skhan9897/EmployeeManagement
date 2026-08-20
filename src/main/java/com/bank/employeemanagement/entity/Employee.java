package com.bank.employeemanagement.entity;

import jakarta.persistence.Entity;
import  jakarta.persistence.GeneratedValue;
import  jakarta.persistence.GenerationType;
import   jakarta.persistence.Id;




@Entity
public class Employee {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private  String email;
    private String password;
    private  String phone;
    private  String address;
    private  String department;
    private String salary;

    public Employee(String name, String email, String password, String phone, String address, String department, String salary) {

        this.name = name;
        this.email = email;
        this.password = password;
        this.phone = phone;
        this.address = address;
        this.department = department;
        this.salary = salary;
    }
    public  Long getId(){
    return id;
    }
     public void  setId(Long id){
         this.id=id;
     }
     public String getName(){
         return name;
     }
     public void setName(String name){
         this.name=name;
     }
     public  String getEmail(){
         return email;
     }
     public void setEmail(String email){
         this.email=email;
     }

     public  String getPassword(){
         return password;
     }
     public void setPassword(String password){
         this.password=password;
     }
     public  String getPhone(){
         return phone;
     }
     public void setPhone(String phone){
         this.phone=phone;

     }
     public   String getAddress(){
         return address;
     }
     public void setAddress(String address){
         this.address=address;
     }

     public   String getDepartment(){
         return department;
     }
     public void setDepartment(String department){
         this.department=department;

     }

     public  String getSalary(){
         return salary;
     }
     public void setSalary(String salary){
         this.salary=salary;
     }


}
