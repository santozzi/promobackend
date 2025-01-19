//routes to user controller

import { Router } from 'express';
import { save,getProductById,getProductsPaginated,getProducts,update } from '../controllers/product.controller';
import { verifyTokenMiddleware } from '../../infrastructure/middlewares/verifyToken.middleware';

const productRoute:Router = Router();

productRoute.get('/filter/',getProductsPaginated);
productRoute.post('/product',verifyTokenMiddleware,save);
productRoute.put('/product/:id',verifyTokenMiddleware,update);
productRoute.get('/:id',getProductById);
productRoute.get('/',getProducts);

export default productRoute;