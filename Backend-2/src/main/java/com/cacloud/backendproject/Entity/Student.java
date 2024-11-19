package com.cacloud.backendproject.Entity;



import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
@Document(collection = "student_registration")
public class Student {

    @Id
    private String _id;
    private String studentname;
    private String status;
    private String cgpa;


    public Student(String cgpa, String status, String studentname, String _id) {
        this.cgpa = cgpa;
        this.status = status;
        this.studentname = studentname;
        this._id = _id;
    }

    public Student() {
    }

    public String getcgpa() {
        return cgpa;
    }

    public void setcgpa(String cgpa) {
        this.cgpa = cgpa;
    }

    public String getstatus() {
        return status;
    }

    public void setstatus(String status) {
        this.status = status;
    }

    public String getStudentname() {
        return studentname;
    }

    public void setStudentname(String studentname) {
        this.studentname = studentname;
    }

    public String get_id() {
        return _id;
    }

    public void set_id(String _id) {
        this._id = _id;
    }

    @Override
    public String toString() {
        return "Student{" +
                "_id='" + _id + '\'' +
                ", studentname='" + studentname + '\'' +
                ", status='" + status + '\'' +
                ", cgpa='" + cgpa + '\'' +
            '}';
}
}
