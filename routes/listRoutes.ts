import express, { Request, Response } from 'express'
const listRouter = express.Router()

const { Op } = require("sequelize");
import {PandaList, PandaListItem} from '../db/Models'

listRouter.get('/api/lists', async function (req: Request, res: Response) {
    const userId : number = req.body.userId

    try {
        const foundLists = await PandaList.findAll({
            attributes: ['listId', 'listName', 'userId'],
            where: {
                userId: {
                    [Op.eq]: userId
                }
            }
        });

        console.log('lists found!');
        console.log(foundLists)
       
        res.send(foundLists)
    } catch (error) {
        console.log('error to get lists!');
        console.log(error);
        res.status(401).send(error)
    }
});

listRouter.get('/api/list_items', async function (req: Request, res: Response) {
    const userId : number = req.body.userId

    try {
        const foundListItems = await PandaListItem.findAll({
            attributes: ['userId', 'listName', 'userId'],
            where: {
                userId: {
                    [Op.eq]: userId
                }
            }
        });

        console.log('lists found!');
        console.log(foundListItems)
       
        res.send(foundListItems)
    } catch (error) {
        console.log('error to get lists!');
        console.log(error);
        res.status(401).send(error)
    }
});

listRouter.post('/api/new_list', async function (req: Request, res: Response) {
    const userId : number = req.body.userId
    const listName : number = req.body.listName
    
    try {
        const newList = await PandaList.create({listName, userId});

        console.log('lists created!');
        console.log(newList)
       
        res.send({
            listId: newList.listId,
            listName: newList.listName,
            userId: newList.userId,
            listItems: []
        })
    } catch (error) {
        console.log('error to create list!');
        console.log(error);
        res.status(401).send(error)
    }
})

listRouter.post('/api/new_list_item', async function (req: Request, res: Response) {
    const listItem : string = req.body.listItem
    const listId : number = req.body.listId
    const checked : boolean = false

    try {
        const newListItem = await PandaListItem.create({listItem, listId, checked});

        console.log('list item created!');
        console.log(newListItem)
       
        res.send(newListItem)
    } catch (error) {
        console.log('error to create list item,!');
        console.log(error);
        res.status(401).send(error)
    }
});

listRouter.delete('/api/delete_list', async function (req: Request, res: Response) {
    const listId : number = req.body.listId

    try {
        await PandaListItem.destroy({
            where: {
                listId: listId
            }
        });

        console.log(`deleted all lists item with list id: ${listId}`)

        await PandaList.destroy({
            where: {
                listId: listId
            }
        });

        console.log(`deleted all lists item with list id: ${listId}`)
       
        res.status(200).send({deletedListId: listId})
    } catch (error) {
        console.log('error to delete list!');
        console.log(error);
        res.status(401).send(error)
    }
});

listRouter.delete('/api/delete_list_item', async function (req: Request, res: Response) {
    const listItemId : number = req.body.listItemId

    try {
        await PandaListItem.destroy({
            where: {
                listItemId: listItemId
            }
        });

        console.log('lists deleted!');
        console.log(`deleted list item id: ${listItemId}`)
       
        res.send({deletedListItemId: listItemId})
    } catch (error) {
        console.log('error to delete list item!');
        console.log(error);
        res.send(error)
    }
});

export default listRouter