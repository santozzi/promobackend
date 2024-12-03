
import UserEntity from "../entities/user.entity";


interface UserDataSource {
    add(user: UserEntity): Promise<UserEntity>;
    getAll(): Promise<UserEntity[]>;
    getUserById(id: number): Promise<UserEntity>;
    getUserByEmail(email: string): Promise<UserEntity>;
    

}   
export default UserDataSource;