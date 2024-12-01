import UserDataSource from "../../domain/datasources/user.datasource";
import UserEntity from "../../domain/entities/user.entity";
import UserRepository from "../../domain/repositories/user.repository";



class UserRepositoryImp implements UserRepository{
    
    userDataSource: UserDataSource;
    constructor(personDataSource: UserDataSource){
        this.userDataSource = personDataSource;
    }


    add(user: UserEntity): Promise<UserEntity> {
       return this.userDataSource.add(user);
    }

}
export default UserRepositoryImp;