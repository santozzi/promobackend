"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class UserEntity {
    constructor(name, lastName, email, phone, avatar, gender, country, state, city, username, password, role, id = 0, createdAt = new Date(), updatedAt = new Date()) {
        this.name = name;
        this.lastName = lastName;
        this.email = email;
        this.phone = phone;
        this.avatar = avatar;
        this.gender = gender;
        this.country = country;
        this.state = state;
        this.city = city;
        this.username = username;
        this.password = password;
        this.role = role;
        this.id = id;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }
    getName() {
        return this.name;
    }
    setName(name) {
        this.name = name;
    }
    getAvatar() {
        return this.avatar;
    }
    setAvatar(avatar) {
        this.avatar = avatar;
    }
    getGender() {
        return this.gender;
    }
    setGender(gender) {
        this.gender = gender;
    }
    getLastName() {
        return this.lastName;
    }
    setLastName(lastName) {
        this.lastName = lastName;
    }
    getEmail() {
        return this.email;
    }
    setEmail(email) {
        this.email = email;
    }
    getPhone() {
        return this.phone;
    }
    setPhone(phone) {
        this.phone = phone;
    }
    getCountry() {
        return this.country;
    }
    setCountry(country) {
        this.country = country;
    }
    getState() {
        return this.state;
    }
    setState(state) {
        this.state = state;
    }
    getCity() {
        return this.city;
    }
    setCity(city) {
        this.city = city;
    }
    getUsername() {
        return this.username;
    }
    setUsername(username) {
        this.username = username;
    }
    getPassword() {
        return this.password;
    }
    setPassword(password) {
        this.password = password;
    }
    getRole() {
        return this.role;
    }
    setRole(role) {
        this.role = role;
    }
    getId() {
        return this.id;
    }
    setId(id) {
        this.id = id;
    }
    getCreatedAt() {
        return this.createdAt;
    }
    setCreatedAt(createdAt) {
        this.createdAt = createdAt;
    }
    getUpdatedAt() {
        return this.updatedAt;
    }
    setUpdatedAt(updatedAt) {
        this.updatedAt = updatedAt;
    }
}
exports.default = UserEntity;
