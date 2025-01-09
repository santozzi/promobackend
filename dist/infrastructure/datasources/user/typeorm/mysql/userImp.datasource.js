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
const user_mapper_1 = require("../../../../mappers/user.mapper");
const user_model_1 = __importDefault(require("../../../../models/user.model"));
const mysql_connection_1 = __importDefault(require("../../../db/mysql.connection"));
class UserDatasorceImp {
    constructor() {
        this.datasource = mysql_connection_1.default.getInstance();
        this.userRepository = this.datasource.getRepository(user_model_1.default);
    }
    loginOne(username, password) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield this.userRepository.findOne({ where: { username, password } });
            if (user == null) {
                throw new Error("User not found");
            }
            else {
                return (0, user_mapper_1.userModelToUserEntity)(user);
            }
        });
    }
    getUserPaginated(page, limit) {
        return __awaiter(this, void 0, void 0, function* () {
            const users = yield this.userRepository.find({ skip: (page - 1) * limit, take: limit });
            return users.map(user_mapper_1.userModelToUserEntity);
        });
    }
    getUserByEmail(email) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield this.userRepository.findOne({ where: { email } });
                if (user == null) {
                    throw new Error("User not found");
                }
                else {
                    return (0, user_mapper_1.userModelToUserEntity)(user);
                }
            }
            catch (error) {
                console.log(error);
                //TODO: Implementar manejo de errores
                throw error;
            }
        });
    }
    getUserById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield this.userRepository.findOne({ where: { id } });
                if (user == null) {
                    throw new Error("User not found");
                }
                else {
                    return (0, user_mapper_1.userModelToUserEntity)(user);
                }
            }
            catch (error) {
                console.log(error);
                //TODO: Implementar manejo de errores
                throw error;
            }
        });
    }
    add(user) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const persona = yield this.userRepository.save((0, user_mapper_1.userEntityToUserModel)(user));
                return (0, user_mapper_1.userModelToUserEntity)(persona);
            }
            catch (error) {
                console.log(error);
                throw error;
            }
        });
    }
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const users = yield this.userRepository.find();
                return users.map((userModel) => {
                    if (userModel == null || userModel == undefined || isNaN(userModel.id)) {
                        throw new Error("User not found");
                    }
                    const user = (0, user_mapper_1.userModelToUserEntity)(userModel);
                    if (user == null || user == undefined || isNaN(user.getId())) {
                        throw new Error("User not found");
                    }
                    return user;
                });
            }
            catch (error) {
                console.log("Este es el error");
                throw error;
            }
        });
    }
}
exports.default = UserDatasorceImp;
