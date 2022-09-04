"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var system_1 = require("@mui/system");
var hooks_1 = require("../redux/hooks");
var Card_1 = __importDefault(require("@mui/material/Card"));
var CardContent_1 = __importDefault(require("@mui/material/CardContent"));
var react_router_dom_1 = require("react-router-dom");
function Home() {
    var lists = (0, hooks_1.useAppSelector)(function (state) { return state.lists.listArray; });
    var navigate = (0, react_router_dom_1.useNavigate)();
    function openList(listId) {
        navigate("/list/".concat(listId));
    }
    return (<system_1.Box sx={{ marginTop: '1em' }}>
            {lists.map(function (list) {
            return (<Card_1.default onClick={function () { openList(list.listId); }} key={list.listId} sx={{ maxWidth: '20em', margin: 'auto', textAlign: 'center', cursor: 'pointer', marginBottom: '1em' }}>
                        <CardContent_1.default>
                            {list.listName}
                        </CardContent_1.default>
                    </Card_1.default>);
        })}
        </system_1.Box>);
}
exports.default = Home;
