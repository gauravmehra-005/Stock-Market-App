package com.example.demo.services;

import org.springframework.stereotype.Service;

import com.example.demo.entities.User;
import com.example.demo.repositories.UserRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class AuthService {

    private UserRepository userRepository;

    // Register User (Store password as plain text)
    public String registerUser(String username, String password, String dob) {
        if (userRepository.findByUsername(username) != null) {
            return "Username already exists!";
        }
        User user = new User();
        user.setUsername(username);
        user.setPassword(password); // No encryption
        user.setDob(dob);
        userRepository.save(user);
        return "User registered successfully!";
    }

    // Authenticate User (Plain password comparison)
    public boolean authenticate(String username, String password) {
        User user = userRepository.findByUsername(username);
        return user != null && user.getPassword().equals(password);
    }

    // Change Password (Directly updating new password)
    public String changePassword(String username, String oldPassword, String newPassword) {
        User user = userRepository.findByUsername(username);
        if (user == null || !user.getPassword().equals(oldPassword)) {
            return "Invalid old password!";
        }
        user.setPassword(newPassword);
        userRepository.save(user);
        return "Password updated successfully!";
    }

    // Forgot Password (Retrieve using Username & DOB)
    public String forgotPassword(String username, String dob) {
        User user = userRepository.findByUsername(username);
        if (user != null && user.getDob().equals(dob)) {
            return "Your password is: " + user.getPassword();
        }
        return "Invalid Username or DOB!";
    }
}
