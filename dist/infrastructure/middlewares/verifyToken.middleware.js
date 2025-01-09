"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyTokenMiddleware = void 0;
//import { verifyToken } from "../../application/helpers/jwt";
const verifyTokenMiddleware = (req, res, next) => {
    const authHeader = req.header('authorization');
    if (!authHeader) {
        return res
            .status(401)
            .json({ message: "Token de acceso no proporcionado" });
    }
    const token = authHeader;
    try {
        //si no verifica salta una excepcion
        const JWT_EXPIRED = '24h';
        const JWT_SECRET = 'secreto';
        //const decoded = verifyToken(token,JWT_SECRET);
        //guardar en el usuario que se verificó ok
        //(req as RequestWithUser).user = decoded as UserIdentify;
        next();
    }
    catch (error) {
        if (error instanceof Error)
            res.status(401).json({ message: error.message });
    }
};
exports.verifyTokenMiddleware = verifyTokenMiddleware;
