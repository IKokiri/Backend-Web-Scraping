import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
class UserOrder extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    id!: string;

    @Column()
    idProduct!: string;

    @Column()
    idUser!: string;

    @Column()
    quantity!: number;
}

export default UserOrder;
