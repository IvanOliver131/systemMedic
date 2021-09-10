import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinTable, CreateDateColumn, ManyToMany } from 'typeorm';
import Pacient from './Pacient';
//import PacientMedicine from './PacientMedicine';

@Entity('medicines')
class Medicine {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    name: string;

    @Column()
    estoque: number;

    @Column()
    type: boolean;

    @Column()
    fornecedor: string;

    @Column()
    nota_fiscal: string;

    @Column()
    valor: number;

    @Column()
    descricao: string;

    @CreateDateColumn()
    created_at: Date

    @Column()
    deleted_at: Date

    @ManyToMany(() => Pacient, (pacient) => pacient.medicines)
    //@JoinColumn({ name: 'id' })
    pacient: Pacient[]; 

    /*
    @ManyToMany(() => Pacient, pacient => pacient.medicines, { eager: true })
    @JoinTable({
        name: 'PacientMedicine',
        joinColumns: [{ name: "id_pacient", referencedColumnName: "id" }],
        inverseJoinColumns: [{ name: "id_medicine", referencedColumnName: "id" }],
    })
    pacient: Pacient[];*/
}

export default Medicine;

  