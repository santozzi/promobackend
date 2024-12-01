//routes to user controller
import multer from 'multer';
import { Router } from 'express';

const formData = multer(); 
const userRoute:Router = Router();



export default userRoute;