
import UserEntity from "../entities/user.entity";


interface UserDataSource {
    add(user: UserEntity): Promise<UserEntity>;
    getAll(): Promise<UserEntity[]>;


}
export default UserDataSource;