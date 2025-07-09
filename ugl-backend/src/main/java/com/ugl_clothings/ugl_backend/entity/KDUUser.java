package com.ugl_clothings.ugl_backend.entity;

import jakarta.persistence.*;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "kdu_users")
@Data
@Getter
@Setter
public class KDUUser extends User {
    @Column(name = "student_id", length = 50, unique = true)
    private String studentId;

    @Column(length = 100)
    private String department;

    public String getStudentId() {
        return studentId;
    }

    public void setStudentId(String studentId) {
        this.studentId = studentId;
    }

    public String getDepartment() {
        return department;
    }

    public void setDepartment(String department) {
        this.department = department;
    }
}