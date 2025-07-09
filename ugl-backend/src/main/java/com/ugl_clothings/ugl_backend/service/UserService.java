package com.ugl_clothings.ugl_backend.service;

import com.ugl_clothings.ugl_backend.dto.UserDTO;
import com.ugl_clothings.ugl_backend.entity.ArmyUser;
import com.ugl_clothings.ugl_backend.entity.KDUUser;
import com.ugl_clothings.ugl_backend.entity.User;
import com.ugl_clothings.ugl_backend.repository.ArmyUserRepository;
import com.ugl_clothings.ugl_backend.repository.KDUUserRepository;
import com.ugl_clothings.ugl_backend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private ArmyUserRepository armyUserRepository;

    @Autowired
    private KDUUserRepository kduUserRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    public String signup(UserDTO userDTO) {
        // Validate unique fields
        if (userRepository.existsByEmail(userDTO.getEmail())) {
            throw new IllegalArgumentException("Email already exists");
        }
        if (userRepository.existsByUsername(userDTO.getUsername())) {
            throw new IllegalArgumentException("Username already exists");
        }
        if (userRepository.existsByPhoneNumber(userDTO.getPhoneNumber())) {
            throw new IllegalArgumentException("Phone number already exists");
        }

        // Create user based on type
        User user;
        if ("ARMY".equalsIgnoreCase(userDTO.getUserType())) {
            if (userDTO.getArmyId() != null && armyUserRepository.existsByArmyId(userDTO.getArmyId())) {
                throw new IllegalArgumentException("Army ID already exists");
            }
            ArmyUser armyUser = new ArmyUser();
            armyUser.setFirstName(userDTO.getFirstName());
            armyUser.setLastName(userDTO.getLastName());
            armyUser.setUsername(userDTO.getUsername());
            armyUser.setPhoneNumber(userDTO.getPhoneNumber());
            armyUser.setEmail(userDTO.getEmail());
            armyUser.setPassword(passwordEncoder.encode(userDTO.getPassword()));
            armyUser.setUserType("ARMY");
            armyUser.setArmyId(userDTO.getArmyId());
            armyUser.setLocation(userDTO.getLocation());
            armyUser.setUnit(userDTO.getUnit());
            user = armyUserRepository.save(armyUser);
        } else if ("KDU".equalsIgnoreCase(userDTO.getUserType())) {
            if (userDTO.getStudentId() != null && kduUserRepository.existsByStudentId(userDTO.getStudentId())) {
                throw new IllegalArgumentException("Student ID already exists");
            }
            KDUUser kduUser = new KDUUser();
            kduUser.setFirstName(userDTO.getFirstName());
            kduUser.setLastName(userDTO.getLastName());
            kduUser.setUsername(userDTO.getUsername());
            kduUser.setPhoneNumber(userDTO.getPhoneNumber());
            kduUser.setEmail(userDTO.getEmail());
            kduUser.setPassword(passwordEncoder.encode(userDTO.getPassword()));
            kduUser.setUserType("KDU");
            kduUser.setStudentId(userDTO.getStudentId());
            kduUser.setDepartment(userDTO.getDepartment());
            user = kduUserRepository.save(kduUser);
        } else {
            throw new IllegalArgumentException("Invalid user type");
        }

        return "User registered successfully with ID: " + user.getId();
    }

    public String signin(UserDTO userDTO) {
        User user = userRepository.findByEmail(userDTO.getEmail())
                .orElseThrow(() -> new IllegalArgumentException("Invalid email or password"));

        if (!passwordEncoder.matches(userDTO.getPassword(), user.getPassword())) {
            throw new IllegalArgumentException("Invalid email or password");
        }

        return "User logged in successfully: " + user.getUsername();
    }
}