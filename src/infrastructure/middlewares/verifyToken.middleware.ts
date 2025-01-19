import { Request, Response, NextFunction } from "express";
import  jwtConfig  from "../../config/jwt.config";
import { verifyToken } from "../../utils/verifyToken";
import { RequestExtended } from "../../utils/RequestExtended";
import UserEntity from "../../domain/entities/user.entity";
import UserRepositoryImp from "../repositories/user.repository";
import UserDatasorceImp from "../datasources/typeorm/mysql/userImp.datasource";
import { TokenData } from "../../presentation/dtos/tokenData";

export const verifyTokenMiddleware = async (req:Request, res:Response, next:NextFunction) => {

  const userRepository = new UserRepositoryImp(new UserDatasorceImp());
  try {
  const authHeader = req.header('authorization');
   if (!authHeader) {
     throw new Error('No token provided');
  }
   const token = authHeader;
    //si no verifica salta una excepcion
    //const JWT_EXPIRED=jwtConfig.JWT_EXPIRED;
    const JWT_SECRET=jwtConfig.SECRET_WORD;
    
    const decoded = verifyToken(token,JWT_SECRET);
    if(!decoded){
      throw new Error("Invalid token");
    }
    //guardar en el usuario que se verificó ok
    const userId = (decoded as TokenData).id;
    const user = await userRepository.getUserById(userId);
   
    (req as RequestExtended).user = user as UserEntity;
    
    
    next();
  } catch (error) {
    if(error instanceof Error)
      res.status(401).json({ message: error.message});
  }
};