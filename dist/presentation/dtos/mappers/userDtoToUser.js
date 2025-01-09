"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userToUserDto = exports.userDtoToUser = void 0;
const user_entity_1 = __importDefault(require("../../../domain/entities/user.entity"));
const user_dto_1 = require("../user.dto");
const userDtoToUser = (userDto) => {
    return new user_entity_1.default(userDto.name.first, userDto.name.last, userDto.email, userDto.phone, userDto.picture.large, userDto.gender, userDto.location.country, userDto.location.state, userDto.location.city, userDto.login.username, userDto.login.password, userDto.login.role);
};
exports.userDtoToUser = userDtoToUser;
const userToUserDto = (user) => {
    return new user_dto_1.UserDto(user.getGender(), {
        first: user.getName(),
        last: user.getLastName()
    }, {
        country: user.getCountry(),
        city: user.getCity(),
        state: user.getState()
    }, user.getEmail(), {
        username: user.getUsername(),
        password: user.getPassword(),
        role: user.getRole()
    }, user.getPhone(), {
        value: user.getId().toString()
    }, {
        large: user.getAvatar()
    });
};
exports.userToUserDto = userToUserDto;
