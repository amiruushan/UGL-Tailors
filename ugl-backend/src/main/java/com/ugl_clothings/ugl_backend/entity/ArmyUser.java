package com.ugl_clothings.ugl_backend.entity;

import jakarta.persistence.*;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "army_users")
@Data
@Getter
@Setter
public class ArmyUser extends User {
    @Column(name = "army_id", length = 50, unique = true)
    private String armyId;

    @Column(length = 100)
    private String location;

    @Column(length = 100)
    private String unit;

    public String getArmyId() {
        return armyId;
    }

    public void setArmyId(String armyId) {
        this.armyId = armyId;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public String getUnit() {
        return unit;
    }

    public void setUnit(String unit) {
        this.unit = unit;
    }
}