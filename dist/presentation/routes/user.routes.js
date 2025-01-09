"use strict";
//routes to user controller
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_controller_1 = require("../controllers/user.controller");
const userRoute = (0, express_1.Router)();
userRoute.get('/filter/', user_controller_1.getUsersPaginated);
userRoute.post('/list', user_controller_1.saveList);
userRoute.get('/params/', user_controller_1.getUserByEmail);
userRoute.post('/user', user_controller_1.save);
userRoute.post('login', user_controller_1.loginOne);
//userRoute.post('/register',savregisterOne);
userRoute.get('/:id', user_controller_1.getUserById);
userRoute.get('/', user_controller_1.getUsers);
exports.default = userRoute;
