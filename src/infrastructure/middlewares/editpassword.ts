import { Request, Response, NextFunction } from "express";
import  jwtConfig  from "../../config/jwt.config";
import { verifyToken } from "../../utils/verifyToken";
import { RequestExtended } from "../../utils/RequestExtended";
import UserEntity from "../../domain/entities/user.entity";
import UserDatasorceImp from "../datasources/typeorm/mysql/userImp.datasource";
import bcrypt from "bcryptjs";
import UserRepositoryImp from "../repositories/user.repository";

export const editpassword = async (req:Request, res:Response, next:NextFunction) => {
   const userRepository = new UserRepositoryImp(new UserDatasorceImp());

  try {
    const users: UserEntity[] = await userRepository.getAll();
    
    for(const user of users){
 
      
      if(user.getPassword() !=null){
        const password = bcrypt.hashSync(user.getPassword(), 10);
        console.log("de middleware: ", password);
        user.setPassword(password);
        userRepository.update(user.getId(), user);
      }
    }

   

    

    
    
    next();
  } catch (error) {
    if(error instanceof Error)
      res.status(401).json({ message: error.message});
  }
};