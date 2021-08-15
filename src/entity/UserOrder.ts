import {
    BaseEntity,
    Column,
    Entity,
    PrimaryGeneratedColumn,
    Generated,
} from 'typeorm';

@Entity()
class UserOrder extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    @Generated('uuid')
    id!: string;

    @Column()
    idProduct!: string;

    @Column()
    idUser!: string;

    @Column()
    quantity!: number;
}

export default UserOrder;
