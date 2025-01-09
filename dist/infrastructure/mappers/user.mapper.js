"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userEntityToUserModel = exports.userModelToUserEntity = void 0;
const user_entity_1 = __importDefault(require("../../domain/entities/user.entity"));
const user_model_1 = __importDefault(require("../models/user.model"));
const userModelToUserEntity = (userModel) => {
    return new user_entity_1.default(userModel.name, userModel.lastName, userModel.email, userModel.phone, userModel.avatar, userModel.gender, userModel.country, userModel.state, userModel.city, userModel.username, userModel.password, userModel.role, userModel.id, userModel.createdAt, userModel.updatedAt);
};
exports.userModelToUserEntity = userModelToUserEntity;
const userEntityToUserModel = (userEntity) => {
    return new user_model_1.default(userEntity.getName(), userEntity.getLastName(), userEntity.getEmail(), userEntity.getPhone(), userEntity.getAvatar(), userEntity.getGender(), userEntity.getCountry(), userEntity.getState(), userEntity.getCity(), userEntity.getUsername(), userEntity.getPassword(), userEntity.getRole(), userEntity.getId(), userEntity.getCreatedAt(), userEntity.getUpdatedAt());
};
exports.userEntityToUserModel = userEntityToUserModel;
