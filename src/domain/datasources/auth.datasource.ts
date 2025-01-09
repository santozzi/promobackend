import UserEntity from "../entities/user.entity";

interface AuthDataSource {
    signup(email: string, password: string,username:string): Promise<string>;
    signin(username:string,password:string): Promise<string>;  

}   
export default AuthDataSource;