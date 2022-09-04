"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.selectList = exports.setList = exports.listSlice = void 0;
var toolkit_1 = require("@reduxjs/toolkit");
var initialState = {
    listArray: []
};
exports.listSlice = (0, toolkit_1.createSlice)({
    name: "list",
    initialState: initialState,
    reducers: {
        setList: function (state, action) {
            state.listArray = action.payload.listArray;
        },
    },
});
exports.setList = exports.listSlice.actions.setList;
var selectList = function (state) { return state; };
exports.selectList = selectList;
exports.default = exports.listSlice.reducer;
