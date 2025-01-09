import  UserEntity  from "../domain/entities/user.entity"
import {Request} from "express";

export interface RequestExtended extends Request{
    user:UserEntity;
 }