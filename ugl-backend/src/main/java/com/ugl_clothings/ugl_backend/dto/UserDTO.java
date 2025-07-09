package com.ugl_clothings.ugl_backend.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

public class UserDTO {
    @NotBlank(message = "First Name is required for signup", groups = Signup.class)
    @Size(min = 3, max = 50, message = "first name must be between 3 and 50 characters", groups = Signup.class)
    private String firstName;

    @NotBlank(message = "last Name is required for signup", groups = Signup.class)
    @Size(min = 3, max = 50, message = "Last name must be between 3 and 50 characters", groups = Signup.class)
    private String lastName;

    @NotBlank(message = "Username is required for signup", groups = Signup.class)
    @Size(min = 3, max = 50, message = "Username must be between 3 and 50 characters", groups = Signup.class)
    private String username;

    @NotBlank(message = "Phone number is required for signup", groups = Signup.class)
    @Size(min = 10, max = 15, message = "Phone number must be between 10 and 15 characters", groups = Signup.class)
    private String phoneNumber;

    @NotBlank(message = "Email is required")
    @Email(message = "Email must be valid")
    @Size(max = 100, message = "Email must not exceed 100 characters")
    private String email;

    @NotBlank(message = "Password is required")
    @Size(min = 6, max = 100, message = "Password must be between 6 and 100 characters")
    private String password;

    @NotBlank(message = "User type is required for signup", groups = Signup.class)
    @Size(max = 10, message = "User type must not exceed 10 characters", groups = Signup.class)
    private String userType;

    // Army-specific fields
    @Size(max = 50, message = "Army ID must not exceed 50 characters", groups = Signup.class)
    private String armyId;

    @Size(max = 100, message = "Location must not exceed 100 characters", groups = Signup.class)
    private String location;

    @Size(max = 100, message = "Unit must not exceed 100 characters", groups = Signup.class)
    private String unit;

    // KDU-specific fields
    @Size(max = 50, message = "Student ID must not exceed 50 characters", groups = Signup.class)
    private String studentId;

    @Size(max = 100, message = "Department must not exceed 100 characters", groups = Signup.class)
    private String department;

    // Getters
    public String getFirstName() { return firstName; }
    public String getLastName() { return lastName; }
    public String getUsername() { return username; }
    public String getPhoneNumber() { return phoneNumber; }
    public String getEmail() { return email; }
    public String getPassword() { return password; }
    public String getUserType() { return userType; }
    public String getArmyId() { return armyId; }
    public String getLocation() { return location; }
    public String getUnit() { return unit; }
    public String getStudentId() { return studentId; }
    public String getDepartment() { return department; }

    // Setters
    public void setFirstName(String firstName) { this.firstName = firstName; }
    public void setLastName(String lastName) { this.lastName = lastName; }
    public void setUsername(String username) { this.username = username; }
    public void setPhoneNumber(String phoneNumber) { this.phoneNumber = phoneNumber; }
    public void setEmail(String email) { this.email = email; }
    public void setPassword(String password) { this.password = password; }
    public void setUserType(String userType) { this.userType = userType; }
    public void setArmyId(String armyId) { this.armyId = armyId; }
    public void setLocation(String location) { this.location = location; }
    public void setUnit(String unit) { this.unit = unit; }
    public void setStudentId(String studentId) { this.studentId = studentId; }
    public void setDepartment(String department) { this.department = department; }

    // Validation groups
    public interface Signup {}
    public interface Signin {}
}