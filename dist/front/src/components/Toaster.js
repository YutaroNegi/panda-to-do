"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toastWarning = exports.toastError = exports.toastSucess = void 0;
var react_toastify_1 = require("react-toastify");
require("react-toastify/dist/ReactToastify.css");
function toastSucess(msg) {
    react_toastify_1.toast.success(msg, {
        position: "top-right",
        autoClose: 800,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });
}
exports.toastSucess = toastSucess;
function toastError(msg) {
    react_toastify_1.toast.error(msg, {
        position: "top-right",
        autoClose: 800,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });
}
exports.toastError = toastError;
function toastWarning(msg) {
    react_toastify_1.toast.warn(msg, {
        position: "top-right",
        autoClose: 800,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });
}
exports.toastWarning = toastWarning;
