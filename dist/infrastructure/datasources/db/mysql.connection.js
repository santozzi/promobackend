"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const typeorm_1 = require("typeorm");
const dataBase_config_1 = __importDefault(require("../../../config/dataBase.config"));
class DataSourceSingle extends typeorm_1.DataSource {
    constructor() {
        super({
            type: 'mysql',
            host: dataBase_config_1.default.MYSQL_HOST,
            port: dataBase_config_1.default.MYSQL_PORT,
            username: dataBase_config_1.default.MYSQL_USER,
            password: dataBase_config_1.default.MYSQL_PASSWORD,
            database: dataBase_config_1.default.MYSQL_DATABASE,
            entities: ['src/infrastructure/models/*.ts'],
        });
    }
    static getInstance() {
        if (!DataSourceSingle.instance) {
            DataSourceSingle.instance = new DataSourceSingle();
        }
        return DataSourceSingle.instance;
    }
}
exports.default = DataSourceSingle;
