import { Entity, PrimaryGeneratedColumn, Column, PrimaryColumn, OneToMany } from 'typeorm';
import Medicine from './Medicine';

@Entity('pacientsMedicine')
class PacientMedicine {
    @PrimaryColumn('integer')
    id_pacient: number;
    
    @PrimaryColumn()
    id_medicine: number;

    @Column()
    qtd_medicine: number;
    
    /*@PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    id_pacient: number;

    @Column()
    name_pacient: string;

    @Column()
    CPF: string;

    @Column()
    cartaoSUS_RG: string;*/

    /*@OneToMany(() => Medicine, medicine => medicine.pacient, { eager: true })
    medicine: Medicine[];*/
}

export default PacientMedicine;