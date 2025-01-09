
import { Auth } from "typeorm";
import UserEntity from "../entities/user.entity";
import AuthDataSource from "./auth.datasource";


interface UserDataSource extends AuthDataSource {
    add(user: UserEntity): Promise<UserEntity>;
    update(id: number, user:UserEntity):void;
    getUserPaginated(page: number, limit: number): Promise<UserEntity[]>;
    getAll(): Promise<UserEntity[]>;
    getUserById(id: number): Promise<UserEntity>;
    getUserByEmail(email: string): Promise<UserEntity>;
 
    

}   
export default UserDataSource;