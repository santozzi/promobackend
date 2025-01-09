import UserEntity from "../entities/user.entity";
import AuthRepository from "./auth.repository";


export interface UserRepository  extends AuthRepository {
   add(localization: UserEntity): Promise<UserEntity>;
   update(id: number, user:UserEntity):void;
   getAll(): Promise<UserEntity[]>;
   getUserPaginated(page: number, limit: number): Promise<UserEntity[]>;
   getUserById(id: number): Promise<UserEntity>;
   getUserByEmail(email: string): Promise<UserEntity>;

}
export default UserRepository ;