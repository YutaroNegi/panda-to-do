"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("./App.css");
var Header_1 = __importDefault(require("./components/Header"));
var Login_1 = __importDefault(require("./components/Login"));
var Register_1 = __importDefault(require("./components/Register"));
var Home_1 = __importDefault(require("./components/Home"));
var OpenList_1 = __importDefault(require("./components/OpenList"));
var react_toastify_1 = require("react-toastify");
var react_router_dom_1 = require("react-router-dom");
function App() {
    return (<react_router_dom_1.BrowserRouter>
      <Header_1.default />
      <react_router_dom_1.Routes>
        <react_router_dom_1.Route path="/" element={<Login_1.default />}/>
        <react_router_dom_1.Route path="/login" element={<Login_1.default />}/>
        <react_router_dom_1.Route path="/register" element={<Register_1.default />}/>
        <react_router_dom_1.Route path="/home" element={<Home_1.default />}/>
        <react_router_dom_1.Route path="/list/:listId" element={<OpenList_1.default />}/>
      </react_router_dom_1.Routes>
      <react_toastify_1.ToastContainer />
    </react_router_dom_1.BrowserRouter>);
}
exports.default = App;
