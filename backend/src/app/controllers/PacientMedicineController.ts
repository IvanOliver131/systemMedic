import { Request, Response } from 'express';
import { getRepository } from 'typeorm';

import PacientMedicine from '../models/PacientMedicine';

class PacientController {

    async store(req: Request, res: Response) {
        const repository = getRepository(PacientMedicine);
        const { id_pacient, lstMedicine } = req.body;

        console.log(id_pacient, lstMedicine);

        let pacientMedicine: any[] = [];
        lstMedicine.forEach(async (item: any) => {
            pacientMedicine.push(
                repository.create({
                    id_pacient,
                    id_medicine: item.id_medicine,
                    qtd_medicine: item.qtd_medicine
                })
            )
        });
        console.log('PACIENT MEDICINE', pacientMedicine)
        await repository.save(pacientMedicine);
        return res.status(200).json({ message: 'Medicamentos vendidos' })
    }

    async ready(req: Request, res: Response) {
        const repository = getRepository(PacientMedicine);
        const drugWithdrawal = await repository.find();

        return res.json(drugWithdrawal);
    }

    async readyByOne(req: Request, res: Response) {
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