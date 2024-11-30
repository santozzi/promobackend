//routes to user controller
import multer from 'multer';
import { Router } from 'express';
import { createUser } from './../controllers/user.controller';
const formData = multer(); 
const userRoute:Router = Router();
userRoute.post("/user", createUser);


export default userRoute;