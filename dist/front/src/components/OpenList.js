"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var system_1 = require("@mui/system");
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
var hooks_1 = require("../redux/hooks");
var List_1 = __importDefault(require("@mui/material/List"));
var ListItem_1 = __importDefault(require("@mui/material/ListItem"));
var ListItemButton_1 = __importDefault(require("@mui/material/ListItemButton"));
var ListItemIcon_1 = __importDefault(require("@mui/material/ListItemIcon"));
var ListItemText_1 = __importDefault(require("@mui/material/ListItemText"));
var Checkbox_1 = __importDefault(require("@mui/material/Checkbox"));
var IconButton_1 = __importDefault(require("@mui/material/IconButton"));
function OpenList() {
    var params = (0, react_router_dom_1.useParams)();
    var _a = (0, react_1.useState)([0]), checked = _a[0], setChecked = _a[1];
    var handleToggle = function (value) { return function () {
        var currentIndex = checked.indexOf(value);
        var newChecked = __spreadArray([], checked, true);
        if (currentIndex === -1) {
            newChecked.push(value);
        }
        else {
            newChecked.splice(currentIndex, 1);
        }
        setChecked(newChecked);
    }; };
    var lists = (0, hooks_1.useAppSelector)(function (state) { return state.lists.listArray; });
    var listId = Number(params.listId);
    var selectedList = lists.filter(function (list) { return list.listId === listId; });
    var _b = (0, react_1.useState)(selectedList[0]), list = _b[0], setList = _b[1];
    return (<system_1.Box sx={{
            marginTop: "1em",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
        }}>
      <system_1.Box sx={{
            textAlign: "center",
            fontWeight: "500",
            fontSize: "1.5em",
            textTransform: "uppercase",
            backgroundColor: "#1976d2",
            color: "#fff",
            padding: "0.5em",
            width: "10em",
            margin: "auto",
            borderRadius: "0.5em",
        }}>
        {list.listName}
      </system_1.Box>

      <List_1.default sx={{ width: "100%", maxWidth: '20em', bgcolor: "background.paper", margin: '1em auto auto auto', border: '0.2em solid #1976d2', borderRadius: '0.5em' }}>
        {list.listItems.map(function (value, index) {
            var labelId = "checkbox-list-label-".concat(index);
            return (<ListItem_1.default key={index} secondaryAction={<IconButton_1.default edge="end" aria-label="comments">
                </IconButton_1.default>} disablePadding>
              <ListItemButton_1.default role={undefined} onClick={handleToggle(index)} dense>
                <ListItemIcon_1.default>
                  <Checkbox_1.default edge="start" checked={checked.indexOf(index) !== -1} tabIndex={-1} disableRipple inputProps={{ "aria-labelledby": labelId }}/>
                </ListItemIcon_1.default>
                <ListItemText_1.default id={labelId} primary={"".concat(value)}/>
              </ListItemButton_1.default>
            </ListItem_1.default>);
        })}
      </List_1.default>
    </system_1.Box>);
}
exports.default = OpenList;
