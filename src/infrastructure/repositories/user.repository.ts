import UserDataSource from "../../domain/datasources/user.datasource";
import UserEntity from "../../domain/entities/user.entity";
import UserRepository from "../../domain/repositories/user.repository";



class UserRepositoryImp implements UserRepository{
    
    userDataSource: UserDataSource;
    constructor(personDataSource: UserDataSource){
        this.userDataSource = personDataSource;
    }
    getUserByEmail(email: string): Promise<UserEntity> {
        return this.userDataSource.getUserByEmail(email);
    }
    getUserById(id: number): Promise<UserEntity> {
       return this.userDataSource.getUserById(id);
    }
    getAll(): Promise<UserEntity[]> {
        return this.userDataSource.getAll();
    }

    add(user: UserEntity): Promise<UserEntity> {
       return this.userDataSource.add(user);
    }


}
export default UserRepositoryImp;