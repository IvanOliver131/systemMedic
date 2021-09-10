import { Router } from "express";

import authMiddleware from "./app/middlewares/authMiddleware";

import UserController from "./app/controllers/UserController";
import AuthController from "./app/controllers/AuthController";
import PacientController from "./app/controllers/PacientController";
import MedicineController from "./app/controllers/MedicineController";
//import PacientMedicineController from "./app/controllers/PacientMedicineController";

const router = Router();

/*AUTENTICAÇÃO*/
router.post('/auth', AuthController.authenticate);

/*USERS*/
router.post('/users', UserController.store);
router.get('/users', authMiddleware, UserController.index);

/*PACIENT*/
router.post('/pacient', PacientController.store);
router.get('/pacient', PacientController.ready);
router.get('/pacient/:id', PacientController.readyByOne);
router.delete('/pacient/:id', PacientController.delete);
router.put('/pacient/:id', PacientController.update);

/*MEDICINE*/
router.post('/medicine', MedicineController.store);
router.get('/medicine', MedicineController.ready);
router.get('/medicine/:id', MedicineController.readyByOne);
router.delete('/medicine/:id', MedicineController.delete);
router.put('/medicine/:id', MedicineController.update);

/*PACIENT AND MEDICINE
router.post('/pacientMedicine', PacientMedicineController.store);
router.get('/pacientMedicine', PacientMedicineController.ready);
router.get('/pacientMedicine/:id', PacientMedicineController.readyByOne);
router.delete('/pacientMedicine/:id', PacientMedicineController.delete);
router.put('/pacientMedicine/:id', PacientMedicineController.update);*/

export default router;