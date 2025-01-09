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
exports.loginOne = exports.getUsersPaginated = exports.saveList = exports.getUserByEmail = exports.getUserById = exports.getUsers = exports.save = void 0;
const user_repository_1 = __importDefault(require("../../infrastructure/repositories/user.repository"));
const userImp_datasource_1 = __importDefault(require("../../infrastructure/datasources/user/typeorm/mysql/userImp.datasource"));
const userDtoToUser_1 = require("../dtos/mappers/userDtoToUser");
const personDatasource = new userImp_datasource_1.default();
const personRepository = new user_repository_1.default(personDatasource);
const save = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userDto = req.body;
        const personEntity = (0, userDtoToUser_1.userDtoToUser)(userDto);
        const person = yield personRepository.add(personEntity);
        res.status(200).json((0, userDtoToUser_1.userToUserDto)(person));
    }
    catch (error) {
        res.status(500).json({ message: error });
    }
});
exports.save = save;
const getUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield personRepository.getAll();
        res.status(200).json(users.map(userDtoToUser_1.userToUserDto));
    }
    catch (error) {
        res.status(500).json({ message: "este es un error de get users" });
    }
});
exports.getUsers = getUsers;
const getUserById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = parseInt(req.params.id);
        const user = yield personRepository.getUserById(id);
        res.status(200).json((0, userDtoToUser_1.userToUserDto)(user));
    }
    catch (error) {
        res.status(500).json({ message: error });
    }
});
exports.getUserById = getUserById;
const getUserByEmail = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email } = (req.query);
        console.log('este es el email: ', email);
        if (!email) {
            throw new Error("User not found");
        }
        const user = yield personRepository.getUserByEmail(email);
        res.status(200).json((0, userDtoToUser_1.userToUserDto)(user));
    }
    catch (error) {
        res.status(500).json({ message: error });
    }
});
exports.getUserByEmail = getUserByEmail;
const saveList = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const usersDto = req.body;
        const users = usersDto.map(userDtoToUser_1.userDtoToUser);
        console.log(users);
        for (const user of users) {
            yield personRepository.add(user);
        }
        res.status(200).json({ message: 'Users saved' });
    }
    catch (error) {
        res.status(500).json({ message: error });
    }
});
exports.saveList = saveList;
const getUsersPaginated = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { page, limit } = req.query;
        const users = yield personRepository.getUserPaginated(page, limit);
        res.status(200).json(users.map(userDtoToUser_1.userToUserDto));
    }
    catch (error) {
        res.status(500).json({ message: error });
    }
});
exports.getUsersPaginated = getUsersPaginated;
const loginOne = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { username, password } = req.body;
        const user = yield personRepository.loginOne(username, password);
        res.status(200).json((0, userDtoToUser_1.userToUserDto)(user));
    }
    catch (error) {
        res.status(500).json({ message: error });
    }
});
exports.loginOne = loginOne;
