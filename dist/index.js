"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv").config();
var express_1 = __importDefault(require("express"));
var PandaDb_1 = __importDefault(require("./db/PandaDb"));
var userRoutes_1 = __importDefault(require("./routes/userRoutes"));
var listRoutes_1 = __importDefault(require("./routes/listRoutes"));
PandaDb_1.default.connectDb();
var app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(userRoutes_1.default);
app.use(listRoutes_1.default);
app.listen(process.env.PORT, function () {
    console.log("Back running on port: ".concat(process.env.PORT));
});
