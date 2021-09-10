/*import { Request, Response } from 'express';
import { getRepository } from 'typeorm';

import PacientMedicine from '../models/PacientMedicine';

class PacientController {

    async store(req: Request, res: Response) {
        const repository = getRepository(PacientMedicine);
        const { id, id_pacient, name_pacient, CPF, cartaoSUS_RG, medicine } = req.body;

        const pacientExists = await repository.findOne({ where: { id } });

        if (pacientExists) {
            return res.sendStatus(409);
        }

        const pacient = repository.create({ id_pacient, name_pacient, CPF, cartaoSUS_RG });
        pacient.medicine = medicine
        await repository.save(pacient);

        return res.json(pacient);
    }

    async ready(req: Request, res: Response){
        const repository = getRepository(PacientMedicine);
        const pacient = await repository.find();

        return res.json(pacient);
    }

    async readyByOne(req: Request, res: Response){
        const { id } = req.params;
        const repository = getRepository(PacientMedicine);
        const pacient = await repository.findOne(id);

        if (pacient != null) {
            return res.json(pacient);
        }
        return res.status(404).json({ message: 'Pacient not found!' })
    }

    async delete(req: Request, res: Response){
        const { id } = req.params;

        const repository = getRepository(PacientMedicine);
        const pacient = await repository.findOne(id);
        if(pacient){
            await repository.delete(pacient.id)
            return res.status(400).json({ message: 'Pacient removed succesfully!' });
        }
        
        return res.status(404).json({ message: 'Pacient not found!' });
    }

    async update(req: Request, res: Response){
        const { id } = req.params;
        const repository = getRepository(PacientMedicine);
        const pacient = await repository.findOne( id );

        if (pacient != null) {
            await repository.update(pacient.id, req.body);
            return res.status(200).json({ message: 'Pacient update success' });
        }
        return res.status(404).json({ message: 'Pacient not found!' });
    }

}

export default new PacientController();*/