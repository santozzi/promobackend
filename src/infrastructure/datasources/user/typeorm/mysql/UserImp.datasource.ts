import UserDataSource from "../../../../../domain/datasources/user.datasource";
import UserEntity from "../../../../../domain/entities/user.entity";
import { userEntityToUserModel, userModelToUserEntity } from "../../../../mappers/user.mapper";
import UserModel from "../../../../models/user.model";
import DataSourceSingle from "../../../db/mysql.connection";

class UserDatasorceImp implements UserDataSource {
   async getUserByEmail(email: string): Promise<UserEntity> {
        try{
            const user =await this.userRepository.findOne(
              {where:{email}}
            );
            if(user==null){
              throw new Error("User not found");
            }else{
              return  userModelToUserEntity(user);
            }
          } catch (error) {
              console.log(error);
              //TODO: Implementar manejo de errores
              throw error;
          }
    }
    async getUserById(id: number): Promise<UserEntity> {
        try{
          const user =await this.userRepository.findOne(
            {where:{id}}
          );
          if(user==null){
            throw new Error("User not found");
          }else{
            return  userModelToUserEntity(user);
          }
        } catch (error) {
            console.log(error);
            //TODO: Implementar manejo de errores
            throw error;
        }
        
        
    }

    datasource = DataSourceSingle.getInstance();
    userRepository = this.datasource.getRepository(UserModel);

    async add(user: UserEntity): Promise<UserEntity> {
        try{
          const persona = await this.userRepository.save(userEntityToUserModel(user));
          return userModelToUserEntity(persona);
        }catch(error){
            console.log(error);
            throw error;
        }
 
    }

    async getAll(): Promise<UserEntity[]> {
        try{
           const users = await this.userRepository.find();
         
           
            return users.map( (userModel:UserModel)=>{
                if(userModel==null || userModel==undefined|| isNaN(userModel.id)){
                    throw new Error("User not found");
                }
                const user =  userModelToUserEntity(userModel);
                if(user==null|| user==undefined|| isNaN(user.getId())){
                    throw new Error("User not found");
                }
              return user;
            });
        }catch(error){
            console.log("Este es el error");
            throw error;
        }
       
    }



}
export default UserDatasorceImp;