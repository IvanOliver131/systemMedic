import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';
import Medicine from './Medicine';
import Pacient from './Pacient';

@Entity('pacientsMedicine')
class PacientMedicine {
    @PrimaryColumn()
    id_pacient: number;

    @PrimaryColumn()
    id_medicine: number;

    @Column()
    qtd_medicine: number;

    @ManyToOne(() => Pacient, (pacients) => pacients.pacientMedicine)
    @JoinColumn([{ name: "id_pacient", referencedColumnName: "id" }])
    pacients: Pacient;

    @ManyToOne(() => Medicine, (medicines) => medicines.pacientMedicine, { eager: true })
    @JoinColumn([{ name: "id_medicine", referencedColumnName: "id" }])
    medicines: Medicine;
}

export default PacientMedicine;