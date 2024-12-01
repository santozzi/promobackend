import UserEntity from "../../domain/entities/users/user.entity";
import { UserModel } from "../models/user/user.model";
import { personEntityToPersonModel, personModelToPersonEntity } from "./person.mapper";

export const userEntityToUserModel = (userEntity:UserEntity) => {
    return new UserModel(
        userEntity.getUsername(),
        userEntity.getPassword(),
        userEntity.getRole(),
        personEntityToPersonModel(userEntity.getPerson()),
        userEntity.id, userEntity.createdAt, userEntity.updatedAt
       );
    
}

export const userModelToUserEntity = (userModel:UserModel) => {
    return new UserEntity(
        userModel.getUsername(),
        userModel.getPassword(),
        userModel.getRole(),
        personModelToPersonEntity(userModel.getPerson()),
        userModel.id, userModel.createdAt, userModel.updatedAt);
    }