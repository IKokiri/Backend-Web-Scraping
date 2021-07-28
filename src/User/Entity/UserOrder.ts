import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
class UserOrder extends BaseEntity {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    idProduct!: number;

    @Column()
    idUser!: number;
}

export default UserOrder;
