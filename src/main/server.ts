import express from 'express';
//Routes
import userRoute from './../presentation/routes/user.routes';
import cors from 'cors';

class Server {
    public app: express.Application;
    public port: number;

    constructor(port: number) {
        this.port = port;
        this.app = express();
        this.middlewares();
        this.routes();
        
    }
    middlewares(){
        this.app.use(express.json());
        //cors
        this.app.use( cors());
    }
    routes(){
        this.app.use(userRoute);

    }
    start(callback: () => void) {
        this.app.listen(this.port, callback);
    }
}
export default Server;