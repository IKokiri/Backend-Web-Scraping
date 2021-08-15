import {
    BaseEntity,
    Column,
    Entity,
    PrimaryGeneratedColumn,
    Unique,
    Generated,
} from 'typeorm';

@Entity()
@Unique(['email'])
class User extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    @Generated('uuid')
    id!: string;

    @Column()
    nome!: string;

    @Column()
    email!: string;

    @Column()
    senha!: string;
}

export default User;
