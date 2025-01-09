"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const mysql_connection_1 = __importDefault(require("../infrastructure/datasources/db/mysql.connection"));
const server_1 = __importDefault(require("./server"));
//Configura middlewares globales y la inicialización general
console.log("Hola mundo");
const startApp = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        //base de datos
        const data = mysql_connection_1.default.getInstance();
        yield data.initialize();
        // Inicializa el servidor
        const server = new server_1.default(3000);
        server.start(() => { });
    }
    catch (error) {
        console.error('Error al crear un nuevo usuario:', error);
    }
});
startApp().then(() => { console.log("Aplicación iniciada"); }).catch((error) => { console.error("Error al iniciar la aplicación", error); });
