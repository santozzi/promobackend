//routes to user controller

import { Router } from 'express';
import { save,getUsers, getUserById, getUserByEmail,saveList,getUsersPaginated,signIn,update } from '../controllers/user.controller';
import { verifyTokenMiddleware } from '../../infrastructure/middlewares/verifyToken.middleware';


const userRoute:Router = Router();
userRoute.get('/filter/',verifyTokenMiddleware,getUsersPaginated);
userRoute.post('/list',verifyTokenMiddleware,saveList);
userRoute.get('/params/',verifyTokenMiddleware,getUserByEmail);
userRoute.post('/user',verifyTokenMiddleware,save);
userRoute.put('/user/:id',verifyTokenMiddleware,update);
userRoute.post('/login',signIn);
//userRoute.post('/register',savregisterOne);
userRoute.get('/:id',verifyTokenMiddleware,getUserById);
userRoute.get('/',verifyTokenMiddleware,getUsers);


 

export default userRoute;