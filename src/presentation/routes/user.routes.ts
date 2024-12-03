//routes to user controller

import { Router } from 'express';
import { save,getUsers, getUserById, getUserByEmail,saveList } from '../controllers/user.controller';


const userRoute:Router = Router();
userRoute.post('/list',saveList);
userRoute.get('/params/',getUserByEmail);
userRoute.post('/user',save);
userRoute.get('/',getUsers);
userRoute.get('/:id',getUserById);

 

export default userRoute;