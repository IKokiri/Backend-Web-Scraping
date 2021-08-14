import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
class UserOrder extends BaseEntity {
    @PrimaryGeneratedColumn('uuid')
    id!: number;

    @Column()
    idProduct!: number;

    @Column()
    idUser!: string;

    @Column()
    quantity!: number;
}

export default UserOrder;
