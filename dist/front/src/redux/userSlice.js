"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.selectUser = exports.setUser = exports.userSlice = void 0;
var toolkit_1 = require("@reduxjs/toolkit");
var initialState = {
    userId: null,
    firstName: null,
    lastName: null,
    email: null,
    password: null,
};
exports.userSlice = (0, toolkit_1.createSlice)({
    name: "list",
    initialState: initialState,
    reducers: {
        setUser: function (state, action) {
            state.userId = action.payload.userId;
            state.firstName = action.payload.firstName;
            state.lastName = action.payload.lastName;
            state.email = action.payload.email;
            state.password = action.payload.password;
        },
    },
});
exports.setUser = exports.userSlice.actions.setUser;
var selectUser = function (state) { return state; };
exports.selectUser = selectUser;
exports.default = exports.userSlice.reducer;
