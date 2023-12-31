"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// src/app.ts
var express_1 = __importDefault(require("express"));
var database_1 = require("./config/database");
var env_1 = require("./config/env");
var adminToDb_1 = require("./services/adminToDb");
var app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
app.get('/', function (req, res) {
    res.send('Hello, World!');
});
// Connect to the database
(0, database_1.connectToDatabase)()
    .then(function () {
    // Start the server after successful database connection
    console.log("sucessfully connected to the database ".concat(env_1.config.mongoUrl));
    app.listen(env_1.config.port, function () {
        adminToDb_1.AdminService.addAdminToDb();
        console.log("Server is running on http://localhost:".concat(env_1.config.port));
    });
});
