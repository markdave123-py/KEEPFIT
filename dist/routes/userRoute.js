"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
var UserController_1 = require("src/controllers/UserController");
var express_1 = require("express");
exports.userRouter = (0, express_1.Router)();
exports.userRouter.post('/user/auth', UserController_1.createNewUser);
