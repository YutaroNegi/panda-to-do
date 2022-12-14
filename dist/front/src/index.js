"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var client_1 = __importDefault(require("react-dom/client"));
var reportWebVitals_1 = __importDefault(require("./reportWebVitals"));
// redux
var store_1 = __importDefault(require("./redux/store"));
var react_redux_1 = require("react-redux");
// css
require("./index.css");
var App_1 = __importDefault(require("./App"));
require("@fontsource/roboto/300.css");
require("@fontsource/roboto/400.css");
require("@fontsource/roboto/500.css");
require("@fontsource/roboto/700.css");
var root = client_1.default.createRoot(document.getElementById('root'));
root.render(<react_redux_1.Provider store={store_1.default}>
  <react_1.default.StrictMode>
    <App_1.default />
  </react_1.default.StrictMode>
  </react_redux_1.Provider>);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
(0, reportWebVitals_1.default)();
