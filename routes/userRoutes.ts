import express, { Request, Response } from 'express'
const userRouter = express.Router()

const { Op } = require("sequelize");
import {PandaUser, PandaList} from '../db/Models'

userRouter.post('/api/register', async function (req: Request, res: Response){
    const firstName : string = req.body.firstName
    const lastName : string = req.body.lastName
    const email : string = req.body.email
    const password : string = req.body.password

    try {
        const newUser = await PandaUser.create({ firstName, lastName, email, password });
        console.log('new user created:')
        console.log(newUser.dataValues)

        res.status(200).send(newUser)
    } catch (error) {
        console.log('error to register user!');
        console.log(error);
        res.status(500).send(error)
    }

});

userRouter.post('/api/login', async function (req: Request, res: Response) {
    console.log('login');
    
    const email : string = req.body.email
    const password : string = req.body.password

    try {
        const foundUser = await PandaUser.findAll({
            attributes: ['userId', 'firstName', 'lastName', 'email', 'password'],
            where: {
                email: {
                    [Op.eq]: email
                }
            }
        });
        const dbPassword : string = foundUser[0].password

        console.log('user found!')
        console.log(foundUser[0].dataValues)

        if(password !== dbPassword){
            throw new Error('Wrong password!')
        }

        const foundLists = await PandaList.findAll({
            attributes: ['listId', 'listName', 'userId'],
            where: {
                userId: {
                    [Op.eq]: foundUser[0].userId
                }
            }
        });
        
        console.log('lists found!')

        const response = {
            ...foundUser[0].dataValues,
            lists: foundLists
        }

        console.log(response);
        
       
        res.send(response)
    } catch (error) {
        console.log('error to login!');
        console.log(error);
        res.status(401).send(error)
    }
});

export default userRouter