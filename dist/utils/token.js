"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generatRefreshToken = exports.generateAccessToken = void 0;
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var env_1 = require("src/config/env");
var generateAccessToken = function (userEmail) {
    if (!userEmail)
        return new Error('User Email not defined');
    return jsonwebtoken_1.default.sign({ email: userEmail }, env_1.config.ACCESS_TOKEN_SECRET, { expiresIn: '2016h' });
};
exports.generateAccessToken = generateAccessToken;
var generatRefreshToken = function (userEmail) {
    if (!userEmail)
        return new Error('user Email not defined');
    return jsonwebtoken_1.default.sign({ email: userEmail }, env_1.config.ACCESS_TOKEN_SECRET);
};
exports.generatRefreshToken = generatRefreshToken;
