import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    BaseEntity,
    Unique,
    Double,
} from 'typeorm';

@Entity()
@Unique(['idNotebook'])
class Notebook extends BaseEntity {
    @PrimaryGeneratedColumn()
    id!: number;

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
    idNotebook!: number;

    @Column()
    linkDetails!: string;
}

export default Notebook;
