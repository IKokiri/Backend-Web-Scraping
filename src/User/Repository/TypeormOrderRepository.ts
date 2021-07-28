import { getRepository } from 'typeorm';
import UserOrder from '../Entity/UserOrder';
import { IOrderRepository } from './IOrderRepository';

class typeormOrderRepository implements IOrderRepository {
    repository = getRepository(UserOrder);

    create(order: UserOrder): void {
        this.repository.insert(order);
    }
}

export default typeormOrderRepository;
