import UserDataSource from "./../../../domain/datasources/user.datasource";
import UserEntity from "../../../domain/entities/users/user.entity";
import { UserRepository as UserRepositoryDom } from "../../../domain/repositories/user.repository";
class UserRepository implements UserRepositoryDom{
    userDataSource: UserDataSource;
    constructor(userDataSource: UserDataSource){
        this.userDataSource = userDataSource;
    }

    getUsers(): Promise<UserEntity[]> {
        throw new Error("Method not implemented.");
    }
    getUser(id: number): Promise<UserEntity> {
        throw new Error("Method not implemented.");
    }
    add(user: UserEntity): Promise<UserEntity> {
       return this.userDataSource.add(user);
    }
    deleteUser(id: number): Promise<void> {
        throw new Error("Method not implemented.");
    }
    updateUser(inscripto: UserEntity): Promise<void> {
        throw new Error("Method not implemented.");
    }
    
    

}
export default UserRepository;