import { Request, Response } from 'express';
import { getRepository } from 'typeorm';

import PacientMedicine from '../models/PacientMedicine';

class PacientController {

    async store(req: Request, res: Response) {
        const repository = getRepository(PacientMedicine);
        const { id_pacient, id_medicine, qtd_medicine } = req.body;

        console.log(repository);

        const drugWithdrawal = repository.create({ id_pacient });
        drugWithdrawal.id_medicine = id_medicine;
        await repository.save(drugWithdrawal);

        return res.json(drugWithdrawal);
    }

    async ready(req: Request, res: Response){
        const repository = getRepository(PacientMedicine);
        const drugWithdrawal = await repository.find();

        return res.json(drugWithdrawal);
    }

    async readyByOne(req: Request, res: Response){
        const { id } = req.params;
        const repository = getRepository(PacientMedicine);
        const drugWithdrawal = await repository.findOne(id);

        if (drugWithdrawal != null) {
            return res.json(drugWithdrawal);
        }
        return res.status(404).json({ message: 'Pacient not found!' })
    }
}

export default new PacientController();