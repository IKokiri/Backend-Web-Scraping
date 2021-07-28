import UserOrder from '../Entity/UserOrder';

export interface IOrderRepository {
    create(order: UserOrder): void;
}
