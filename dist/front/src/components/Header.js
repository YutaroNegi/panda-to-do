"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Box_1 = __importDefault(require("@mui/material/Box"));
var panda_svgrepo_com_svg_1 = require("../assets/panda-svgrepo-com.svg");
function Header() {
    return (<Box_1.default sx={{ padding: '0.5em', color: '#fff', height: '5em', widows: '100vw', backgroundColor: '#1976d2', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-evenly' }}>
            <panda_svgrepo_com_svg_1.ReactComponent fill="#fff" height="50"/> 
            <Box_1.default sx={{ fontSize: '1.2em', fontWeight: '500' }}>TO DO LIST</Box_1.default>
        </Box_1.default>);
}
exports.default = Header;
