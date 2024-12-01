
import UserEntity from "../entities/users/user.entity";
interface UserDataSource {
    getUsers(): Promise<UserEntity[]>;
    getUser(id: number): Promise<UserEntity>;
    add(usuario: UserEntity): Promise<UserEntity>;
    deleteUser(id: number): Promise<void>;
    updateUser(usuario: UserEntity): Promise<void>;

}
export default UserDataSource;