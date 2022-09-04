const { Sequelize } = require('sequelize');
const sequelize = new Sequelize(process.env.DB_STRING)

import { PandaUser, PandaList, PandaListItem } from './Models'

const PandaDb = {
    connectDb: async function () {
        try {
            await sequelize.authenticate();
            console.log('Connection has been established successfully.');
            await PandaUser.sync()
            console.log('Table: PandaUser sync');
            await PandaList.sync()
            console.log('Table: PandaList sync');
            await PandaListItem.sync()
            console.log('Table: PandaListItem sync');

            console.log('EVERYTHING SYNCED!!!')
        } catch (error) {
            console.error('Unable to connect to the database:', error);
        }
    },
    PandaUser,
    PandaList,
    PandaListItem
}

export default PandaDb







