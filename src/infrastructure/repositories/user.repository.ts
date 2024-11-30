import UserDataSource from "../../domain/datasources/user.datasource";
import UserEntity from "../../domain/entities/users/user.entity";
import { UserRepository as UserRepositoryDom } from "../../domain/repositories/user.repository";
class UserRepository implements UserRepositoryDom{
    userDataSource: UserDataSource;
    constructor(userDataSource: UserDataSource){
        this.userDataSource = userDataSource;
    }
    getUsers(): Promise<UserEntity[]> {
        return this.userDataSource.getUsers();
    }
    getUserById(id: number): Promise<UserEntity> {
        return this.userDataSource.getUser(id);
    }
    getUserByEmail(email: string): Promise<UserEntity> {
        return this.userDataSource.getUserByEmail(email);
    }
    getUserByDni(dni: string): Promise<UserEntity> {
        return this.userDataSource.getUserByDni(dni);
    }
    addUser(inscripto: UserEntity): Promise<UserEntity> {

    
        return this.userDataSource.addUser(inscripto);
    }
    deleteUser(id: number): Promise<void> {
        return this.userDataSource.deleteUser(id);
    }
    updateUser(inscripto: UserEntity): Promise<void> {
        return this.userDataSource.updateUser(inscripto);
    }

}
export default UserRepository;