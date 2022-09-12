"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var listRouter = express_1.default.Router();
var Op = require("sequelize").Op;
var Models_1 = require("../db/Models");
listRouter.get('/api/lists', function (req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var userId, foundLists, error_1;
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    userId = req.body.userId;
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, Models_1.PandaList.findAll({
                            attributes: ['listId', 'listName', 'userId'],
                            where: {
                                userId: (_a = {},
                                    _a[Op.eq] = userId,
                                    _a)
                            }
                        })];
                case 2:
                    foundLists = _b.sent();
                    console.log('lists found!');
                    console.log(foundLists);
                    res.send(foundLists);
                    return [3 /*break*/, 4];
                case 3:
                    error_1 = _b.sent();
                    console.log('error to get lists!');
                    console.log(error_1);
                    res.status(401).send(error_1);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
});
listRouter.get('/api/list_items', function (req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var userId, foundListItems, error_2;
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    userId = req.body.userId;
                    _b.label = 1;
                case 1:
                    _b.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, Models_1.PandaListItem.findAll({
                            attributes: ['userId', 'listName', 'userId'],
                            where: {
                                userId: (_a = {},
                                    _a[Op.eq] = userId,
                                    _a)
                            }
                        })];
                case 2:
                    foundListItems = _b.sent();
                    console.log('lists found!');
                    console.log(foundListItems);
                    res.send(foundListItems);
                    return [3 /*break*/, 4];
                case 3:
                    error_2 = _b.sent();
                    console.log('error to get lists!');
                    console.log(error_2);
                    res.status(401).send(error_2);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
});
listRouter.post('/api/new_list', function (req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var userId, listName, newList, error_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    userId = req.body.userId;
                    listName = req.body.listName;
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, Models_1.PandaList.create({ listName: listName, userId: userId })];
                case 2:
                    newList = _a.sent();
                    console.log('lists created!');
                    console.log(newList);
                    res.send({
                        listId: newList.listId,
                        listName: newList.listName,
                        userId: newList.userId,
                        listItems: []
                    });
                    return [3 /*break*/, 4];
                case 3:
                    error_3 = _a.sent();
                    console.log('error to create list!');
                    console.log(error_3);
                    res.status(401).send(error_3);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
});
listRouter.post('/api/new_list_item', function (req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var listItem, listId, checked, newListItem, error_4;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    listItem = req.body.listItem;
                    listId = req.body.listId;
                    checked = false;
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, Models_1.PandaListItem.create({ listItem: listItem, listId: listId, checked: checked })];
                case 2:
                    newListItem = _a.sent();
                    console.log('list item created!');
                    console.log(newListItem);
                    res.send(newListItem);
                    return [3 /*break*/, 4];
                case 3:
                    error_4 = _a.sent();
                    console.log('error to create list item,!');
                    console.log(error_4);
                    res.status(401).send(error_4);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
});
listRouter.delete('/api/delete_list', function (req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var listId, error_5;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    listId = req.body.listId;
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 4, , 5]);
                    return [4 /*yield*/, Models_1.PandaListItem.destroy({
                            where: {
                                listId: listId
                            }
                        })];
                case 2:
                    _a.sent();
                    console.log("deleted all lists item with list id: ".concat(listId));
                    return [4 /*yield*/, Models_1.PandaList.destroy({
                            where: {
                                listId: listId
                            }
                        })];
                case 3:
                    _a.sent();
                    console.log("deleted all lists item with list id: ".concat(listId));
                    res.status(200).send({ deletedListId: listId });
                    return [3 /*break*/, 5];
                case 4:
                    error_5 = _a.sent();
                    console.log('error to delete list!');
                    console.log(error_5);
                    res.status(401).send(error_5);
                    return [3 /*break*/, 5];
                case 5: return [2 /*return*/];
            }
        });
    });
});
listRouter.delete('/api/delete_list_item', function (req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var listItemId, error_6;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    listItemId = req.body.listItemId;
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, Models_1.PandaListItem.destroy({
                            where: {
                                listItemId: listItemId
                            }
                        })];
                case 2:
                    _a.sent();
                    console.log('lists deleted!');
                    console.log("deleted list item id: ".concat(listItemId));
                    res.send({ deletedListItemId: listItemId });
                    return [3 /*break*/, 4];
                case 3:
                    error_6 = _a.sent();
                    console.log('error to delete list item!');
                    console.log(error_6);
                    res.send(error_6);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    });
});
exports.default = listRouter;
