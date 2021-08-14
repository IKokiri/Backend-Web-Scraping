import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    BaseEntity,
    Unique,
} from 'typeorm';

@Entity()
@Unique(['idNotebook'])
class NotebookDetail extends BaseEntity {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    img!: string;

    @Column()
    model!: string;

    @Column()
    description!: string;

    @Column('float')
    price!: number;

    @Column()
    ratting!: string;

    @Column()
    idNotebook!: number;
}

export default NotebookDetail;
