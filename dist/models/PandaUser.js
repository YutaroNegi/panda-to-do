"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _a = require('sequelize'), Sequelize = _a.Sequelize, DataTypes = _a.DataTypes;
var sequelize = new Sequelize(process.env.DB_STRING);
require("dotenv").config();
var PandaUser = sequelize.define('PandaUser', {
    // Model attributes are defined here
    pandaUserId: {
        type: DataTypes.STRING,
        allowNull: false
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
}, {
// Other model options go here
});
// `sequelize.define` also returns the model
console.log(PandaUser === sequelize.models.PandaUser); // true
exports.default = PandaUser;
