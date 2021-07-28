import { getRepository, Repository } from 'typeorm';
import UserOrder from '../Entity/UserOrder';
import { IOrderRepository } from './IOrderRepository';

class typeormOrderRepository implements IOrderRepository {
    private repository: Repository<UserOrder> | undefined;

    create(order: UserOrder): void {
        this.repository = getRepository(UserOrder);
        this.repository.insert(order);
    }
}

export default typeormOrderRepository;
