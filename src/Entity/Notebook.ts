import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    BaseEntity,
    Unique,
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

    @Column()
    price!: string;

    @Column()
    ratting!: string;
}

export default Notebook;
