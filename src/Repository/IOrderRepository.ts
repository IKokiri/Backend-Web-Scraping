import UserOrder from '../entity/UserOrder';

export interface IOrderRepository {
    create(order: UserOrder): void;
}
