import { Request, Response } from 'express';
import { getRepository } from 'typeorm';

import User from '../models/User';

class UserController {

    index(req: Request, res: Response) {
        return res.send({ userID: req.userId });
    }

    async store(req: Request, res: Response) {
        const repository = getRepository(User);
        const { username, email, password, type } = req.body;

        const userExists = await repository.findOne({ where: { email } });

        if (userExists) {
            return res.sendStatus(409);
        }

        const user = repository.create({ username, email, password, type });
        await repository.save(user);

        return res.json(user);
    }

    async ready(req: Request, res: Response){
        const repository = getRepository(User);
        const users = await repository.find();

        return res.json(users);
    }
}

export default new UserController();