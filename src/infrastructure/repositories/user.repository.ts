import UserDataSource from "../../domain/datasources/user.datasource";
import UserEntity from "../../domain/entities/user.entity";
import UserRepository from "../../domain/repositories/user.repository";



class UserRepositoryImp implements UserRepository{
    
    userDataSource: UserDataSource;
    constructor(personDataSource: UserDataSource){
        this.userDataSource = personDataSource;
    }
    update(id: number, user: UserEntity): void {
        this.userDataSource.update(id, user);
    }
    signup(email: string, password: string, username: string): Promise<string> {
        //TODO: Implementar
        throw new Error("Method not implemented.");
    }
    signin(username: string, password: string): Promise<string> {
       return this.userDataSource.signin(username, password);
    }
/*     loginOne(username: string, password: string): Promise<UserEntity> {
        return this.userDataSource.loginOne(username, password);
    } */
    getUserPaginated(page: number, limit: number): Promise<UserEntity[]> {
        return this.userDataSource.getUserPaginated(page, limit);
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