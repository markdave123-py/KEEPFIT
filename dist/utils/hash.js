"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.hashPassword = void 0;
var bcrypt_1 = __importDefault(require("bcrypt"));
var hashPassword = function (password) {
    return bcrypt_1.default.hash(password, 10);
};
exports.hashPassword = hashPassword;
