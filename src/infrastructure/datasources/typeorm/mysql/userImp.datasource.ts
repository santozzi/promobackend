import jwtConfig from "../../../../config/jwt.config";
import UserDataSource from "../../../../domain/datasources/user.datasource";
import UserEntity from "../../../../domain/entities/user.entity";
import { TokenData } from "../../../../presentation/dtos/tokenData";
import { userEntityToUserModel, userModelToUserEntity } from "../../../mappers/user.mapper";
import UserModel from "../../../models/user.model";
import DataSourceSingle from "../../db/mysql.connection";
import bcrypt from 'bcryptjs';
import jwt from "jsonwebtoken";
class UserDatasorceImp implements UserDataSource {



  datasource = DataSourceSingle.getInstance();
  userRepository = this.datasource.getRepository(UserModel);

  async update(id: number, user: UserEntity){
    try{
      const usuario =await this.userRepository.findOne(
        {where:{id}}
      );
      if(usuario==null){
        throw new Error("User not found");
      }
      
      await this.userRepository.update(id, userEntityToUserModel(user));
 
    }catch(error){
        console.log(error);
        throw error;
    }
  }

  async signup(email: string, password: string, username: string): Promise<string> {
    //TODO: Implementar
    throw new Error("Method not implemented.");
  }
  async signin(username: string, password: string): Promise<string> {
    try{
      const user = await this.userRepository.findOne({where:{username}});
      if(user==null){
        throw new Error("User not found");
      }
      const correctPassword:boolean = bcrypt.compareSync(password, user.password);
      if(!correctPassword){
        throw new Error("Password or username incorrect");
      }
      const payload: TokenData = {
        id: user.id,
        email: user.email,
        username: user.username,
      };
      //firmar token

      const token = jwt.sign(payload, jwtConfig.SECRET_WORD, {
        //expiresIn: jwtConfig.JWT_EXPIRED,
      });
      
      return token; 
    }catch(error){
     
      throw error;
    }
  }

/*   async loginOne(username: string, password: string): Promise<UserEntity> {
   const user = await this.userRepository.findOne({where:{username, password}});
    if(user==null){
      throw new Error("User not found");
    }else{
      return userModelToUserEntity(user);
    }
  } */
  async getUserPaginated(page: number, limit: number): Promise<UserEntity[]> {
    const users = await this.userRepository.find({skip: (page-1)*limit, take: limit}); 
    return users.map(userModelToUserEntity)
   
  }
  
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