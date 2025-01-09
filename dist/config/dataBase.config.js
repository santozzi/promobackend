"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
if (!process.env.MYSQL_HOST) {
    throw new Error('MYSQL_HOST must be provided');
}
if (!process.env.MYSQL_PORT) {
    throw new Error('MYSQL_PORT must be provided');
}
if (!process.env.MYSQL_USER) {
    throw new Error('MYSQL_USER must be provided');
}
if (!process.env.MYSQL_PASSWORD) {
    throw new Error('MYSQL_PASSWORD must be provided');
}
if (!process.env.MYSQL_DATABASE) {
    throw new Error('MYSQL_DATABASE must be provided');
}
const dataBaseConfig = {
    MYSQL_HOST: process.env.MYSQL_HOST,
    MYSQL_PORT: Number(process.env.MYSQL_PORT),
    MYSQL_USER: process.env.MYSQL_USER,
    MYSQL_PASSWORD: process.env.MYSQL_PASSWORD,
    MYSQL_DATABASE: process.env.MYSQL_DATABASE,
};
exports.default = dataBaseConfig;
