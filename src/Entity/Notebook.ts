import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    BaseEntity,
    Unique,
    Double,
} from 'typeorm';

@Entity()
@Unique(['model'])
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
}

export default Notebook;
