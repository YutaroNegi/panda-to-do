const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize(process.env.DB_STRING)

const PandaUser = sequelize.define('PandaUser', {
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
})

const PandaList = sequelize.define('PandaList', {
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

})

const PandaListItem = sequelize.define('PandaListItem', {
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
})

export { PandaUser, PandaList, PandaListItem }