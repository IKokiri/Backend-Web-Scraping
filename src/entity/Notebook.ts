import {
    BaseEntity,
    Column,
    Entity,
    Generated,
    PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
class Notebook extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    @Generated('uuid')
    id!: string;

    @Column()
    description!: string;

    @Column()
    img!: string;

    @Column()
    model!: string;

    @Column('float')
    price!: number;

    @Column()
    ratting!: string;

    @Column()
    idNotebook!: string;

    @Column()
    linkDetails!: string;
}

export default Notebook;
