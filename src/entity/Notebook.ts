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
    @PrimaryGeneratedColumn('uuid')
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
