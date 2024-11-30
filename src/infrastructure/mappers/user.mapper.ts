import UserEntity from "../../domain/entities/users/user.entity";
import { UserModel } from "../models/user/user.model";

export const userToUserModel = (user:UserEntity):UserModel => {
    return  new UserModel(
        user.name,
        user.lastName,
        user.role,
        user.email,
        user.password,
        user.phone
    );

}
export const userModelToUser = (userModel:UserModel):UserEntity => {
    return  new UserEntity(
        userModel.getName(),
        userModel.getLastName(),
        userModel.getDni(),
        userModel.getEmail(),
        userModel.getPhone(),
        userModel.getPassword(),
        userModel.getId(),
        userModel.getCreatedAt(),
        userModel.getUpdatedAt()
    );
}