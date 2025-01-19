//routes to user controller
import { Router } from 'express';
import { restart } from '../controllers/restart.controller';


const restartRoute:Router = Router();
restartRoute.get('/', restart);

export default restartRoute;