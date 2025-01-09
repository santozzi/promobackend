//routes to user controller

import { Router } from 'express';
import { save,getCategoriesPaginated,getcategoryById,getcategories,update} from '../controllers/category.controller';
import { verifyTokenMiddleware } from '../../infrastructure/middlewares/verifyToken.middleware';


const categoryRoute:Router = Router();
categoryRoute.get('/filter/',getCategoriesPaginated);
categoryRoute.post('/category',verifyTokenMiddleware,save);
categoryRoute.put('/category/:id',verifyTokenMiddleware,update);
categoryRoute.get('/:id',getcategoryById);
categoryRoute.get('/',getcategories);


 

export default categoryRoute;