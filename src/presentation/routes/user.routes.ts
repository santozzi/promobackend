//routes to user controller

import { Router } from 'express';
import { save,getUsers } from '../controllers/user.controller';


const userRoute:Router = Router();

userRoute.post('/user',save);
userRoute.get('/',getUsers); 

export default userRoute;