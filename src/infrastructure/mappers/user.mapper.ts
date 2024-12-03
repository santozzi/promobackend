import UserEntity from "../../domain/entities/user.entity";
import UserModel from "../models/user.model";


export const userModelToUserEntity = (userModel:UserModel) => {

    
    
    return new UserEntity(
        userModel.name, 
        userModel.lastName, 
        userModel.email, 
        userModel.phone,
        userModel.avatar,
        userModel.gender,
        userModel.country,
        userModel.state,
        userModel.city,
        userModel.username,
        userModel.password,
        userModel.role, 
        userModel.id, userModel.createdAt, userModel.updatedAt);
}

export const userEntityToUserModel = (userEntity:UserEntity) => {
   
    return new UserModel(
        userEntity.getName(), 
        userEntity.getLastName(), 
        userEntity.getEmail(), 
        userEntity.getPhone(),
        userEntity.getAvatar(),
        userEntity.getGender(),
        userEntity.getCountry(),
        userEntity.getState(),
        userEntity.getCity(), 
        userEntity.getUsername(),
        userEntity.getPassword(),
        userEntity.getRole(),
        userEntity.getId(), userEntity.getCreatedAt(), userEntity.getUpdatedAt());
}