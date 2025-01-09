"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserDto = exports.Name = exports.Location = exports.Login = exports.Id = exports.Picture = void 0;
class Picture {
    constructor(large) {
        this.large = large;
    }
}
exports.Picture = Picture;
class Id {
    constructor(value) {
        this.value = value;
    }
}
exports.Id = Id;
class Login {
    constructor(username, password, role) {
        this.username = username;
        this.password = password;
        this.role = role;
    }
}
exports.Login = Login;
class Location {
    constructor(country, city, state) {
        this.country = country;
        this.city = city;
        this.state = state;
    }
}
exports.Location = Location;
class Name {
    constructor(first, last) {
        this.first = first;
        this.last = last;
    }
}
exports.Name = Name;
class UserDto {
    constructor(gender, name, location, email, login, phone, id, picture) {
        this.gender = gender;
        this.name = name;
        this.location = location;
        this.email = email;
        this.login = login;
        this.phone = phone;
        this.id = id;
        this.picture = picture;
    }
}
exports.UserDto = UserDto;
