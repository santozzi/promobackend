import UserEntity from "../entities/user.entity";


export interface UserRepository {
   add(localization: UserEntity): Promise<UserEntity>;
   getAll(): Promise<UserEntity[]>;
   getUserById(id: number): Promise<UserEntity>;
}
export default UserRepository ;