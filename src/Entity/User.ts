import {
    BaseEntity,
    Column,
    Entity,
    PrimaryGeneratedColumn,
    Unique,
} from 'typeorm';

@Entity()
@Unique(['email'])
class User extends BaseEntity {
    @PrimaryGeneratedColumn()
    id!: string;

    @Column()
    nome!: string;

    @Column()
    email!: string;

    @Column()
    senha!: string;
}

export default User;
