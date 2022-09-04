"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PandaListItem = exports.PandaList = exports.PandaUser = void 0;
var _a = require('sequelize'), Sequelize = _a.Sequelize, DataTypes = _a.DataTypes;
var sequelize = new Sequelize(process.env.DB_STRING);
var PandaUser = sequelize.define('PandaUser', {
    userId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    firstName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    }
});
exports.PandaUser = PandaUser;
var PandaList = sequelize.define('PandaList', {
    listId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    listName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    userId: {
        type: DataTypes.INTEGER,
        references: {
            model: PandaUser,
            key: 'userId'
        }
    },
});
exports.PandaList = PandaList;
var PandaListItem = sequelize.define('PandaListItem', {
    listItemId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    listItem: {
        type: DataTypes.STRING,
        allowNull: false
    },
    checked: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    listId: {
        type: DataTypes.INTEGER,
        references: {
            model: PandaList,
            key: 'listId'
        }
    },
});
exports.PandaListItem = PandaListItem;
