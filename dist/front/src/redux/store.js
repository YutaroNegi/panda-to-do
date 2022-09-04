"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var toolkit_1 = require("@reduxjs/toolkit");
var listSlice_1 = __importDefault(require("./listSlice"));
var userSlice_1 = __importDefault(require("./userSlice"));
var store = (0, toolkit_1.configureStore)({
    reducer: {
        lists: listSlice_1.default,
        user: userSlice_1.default
    },
});
exports.default = store;
