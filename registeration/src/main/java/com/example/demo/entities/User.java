package com.example.demo.entities;
import com.fasterxml.jackson.annotation.JsonProperty;

import jakarta.persistence.*;

@Entity
@Table(name = "users")
public class User {
	 @Id
	    @GeneratedValue(strategy = GenerationType.IDENTITY)
	    private Long id;

	    @Column(unique = true, nullable = false)
	    private String username;

	    @Column(nullable = false)
	    private String password;

	    @Column(nullable = false)
	    private String dob;

	    @JsonProperty("deposit")  // Ensure JSON maps correctly
	    @Column(nullable = false)
	    private double deposit;

    public User() {}

    public User(Long id, String username, String password, String dob, double deposit) {
        this.id = id;
        this.username = username;
        this.password = password;
        this.dob = dob;
        this.deposit = deposit;
    }

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getUsername() { return username; }
    public void setUsername(String username) { this.username = username; }

    public String getPassword() { return password; }
    public void setPassword(String password) { this.password = password; }

    public String getDob() { return dob; }
    public void setDob(String dob) { this.dob = dob; }

    public double getDeposit() { return deposit; }
    public void setDeposit(double deposit) { this.deposit = deposit; }

    @Override
    public String toString() {
        return "User [id=" + id + ", username=" + username + ", password=" + password + ", dob=" + dob + ", deposit=" + deposit + "]";
    }
}
