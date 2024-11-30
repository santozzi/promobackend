
import UserEntity from "../entities/users/user.entity";
interface UserDataSource {
    getUsers(): Promise<UserEntity[]>;
    getUser(id: number): Promise<UserEntity>;
    addUser(inscripto: UserEntity): Promise<UserEntity>;
    deleteUser(id: number): Promise<void>;
    updateUser(inscripto: UserEntity): Promise<void>;

}
export default UserDataSource;