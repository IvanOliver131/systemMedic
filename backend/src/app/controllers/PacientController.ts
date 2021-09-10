import { Request, Response } from 'express';
import { getRepository } from 'typeorm';

import Pacient from '../models/Pacient';

class PacientController {

    async store(req: Request, res: Response) {
        const repository = getRepository(Pacient);
        const { name, age, bairro, CPF, cartaoSUS_RG } = req.body;

        const pacientExists = await repository.findOne({ where: { CPF } });

        if (pacientExists) {
            return res.sendStatus(409);
        }

        const pacient = repository.create({ name, age, bairro, CPF, cartaoSUS_RG });
        await repository.save(pacient);

        return res.json(pacient);
    }

    async ready(req: Request, res: Response){
        const repository = getRepository(Pacient);
        const pacients = await repository.find();

        return res.json(pacients);
    }

    async readyByOne(req: Request, res: Response){
        const { id } = req.params;
        const repository = getRepository(Pacient);
        const pacient = await repository.findOne(id);

        if (pacient != null) {
            return res.json(pacient);
        }
        return res.status(404).json({ message: 'Pacient not found!' })
    }

    async delete(req: Request, res: Response){
        const { id } = req.params;

        const repository = getRepository(Pacient);
        const pacient = await repository.findOne(id);
        if(pacient){
            await repository.delete(pacient.id)
            return res.status(400).json({ message: 'Pacient removed succesfully!' });
        }
        
        return res.status(404).json({ message: 'Pacient not found!' });
    }

    async update(req: Request, res: Response){
        const { id } = req.params;
        const repository = getRepository(Pacient);
        const pacient = await repository.findOne( id );

        if (pacient != null) {
            await repository.update(pacient.id, req.body);
            return res.status(200).json({ message: 'Pacient update success' });
        }
        return res.status(404).json({ message: 'Pacient not found!' });
    }

}

export default new PacientController();