package com.cacloud.backendproject.Repo;


import com.cacloud.backendproject.Entity.Student;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface StudentRepo extends MongoRepository<Student,String>{

        }