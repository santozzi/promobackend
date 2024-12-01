import UserEntity from "../entities/user.entity";


export interface UserRepository {
   add(localization: UserEntity): Promise<UserEntity>;
}
export default UserRepository ;