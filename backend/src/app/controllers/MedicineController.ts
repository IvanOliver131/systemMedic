import { Request, Response } from 'express';
import { getRepository } from 'typeorm';

import Medicine from '../models/Medicine';

class MedicineController {

    async store(req: Request, res: Response) {
        const repository = getRepository(Medicine);
        const { name, estoque, type, fornecedor, nota_fiscal, valor, descricao } = req.body;

        const medicineExists = await repository.findOne({ where: { nota_fiscal } });

        if (medicineExists) {
            return res.sendStatus(409);
        }

        const medicine = repository.create({ name, estoque, type, fornecedor, nota_fiscal, valor, descricao });
        await repository.save(medicine);

        return res.json(medicine);
    }

    async ready(req: Request, res: Response){
      const repository = getRepository(Medicine);
        const medicines = await repository.find();

        return res.json(medicines);
    }

    async readyByOne(req: Request, res: Response){
        const { id } = req.params;
        const repository = getRepository(Medicine);
        const medicine = await repository.findOne(id);

        if (medicine !== null) {
            return res.json(medicine);
        }
        return res.status(404).json({ message: 'Medicine not found!' })
    }

    async delete(req: Request, res: Response){
        const { id } = req.params

        const repository = getRepository(Medicine);
        const medicine = await repository.findOne(id)
        if(medicine){
            await repository.delete(medicine.id)
            return res.status(200).json({ message: 'Medicine removed succesfully!' })
        }
        
        return res.status(404).json({ message: 'Medicine not found!' })
    }

    async update(req: Request, res: Response){
        const { id } = req.params;
        const repository = getRepository(Medicine);
        const medicine = await repository.findOne( id );

        if (medicine != null) {
            await repository.update(medicine.id, req.body);
            return res.status(200).json({ message: 'Medicine update success' });
        }
        return res.status(404).json({ message: 'Medicine not found!' });
    }

}

export default new MedicineController();
