import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, OneToMany, ManyToMany, JoinTable } from 'typeorm';
import Medicine from './Medicine';

@Entity('pacients')
class Pacient {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    name: string;

    @Column()
    age: number;

    @Column()
    bairro: string;

    @Column()
    CPF: string;

    @Column()
    cartaoSUS_RG: string;

    @CreateDateColumn()
    created_at: Date;

    @Column()
    deleted_at: Date;

    @ManyToMany(() => Medicine, medicine => medicine.pacient, { eager: true })
    @JoinTable({
        name: 'PacientMedicine',
        joinColumns: [{ name: "id_pacient", referencedColumnName: "id" }],
        inverseJoinColumns: [{ name: "id_medicine", referencedColumnName: "id" }],
    })
    medicines: Medicine[];
}

export default Pacient;