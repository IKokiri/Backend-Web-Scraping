import { getRepository, Repository } from 'typeorm';
import UserOrder from '../entity/UserOrder';
import { IOrderRepository } from './IOrderRepository';

class TypeormOrderRepository implements IOrderRepository {
    private repository: Repository<UserOrder> | undefined;

    create(order: UserOrder): void {
        this.repository = getRepository(UserOrder);
        this.repository.insert(order);
    }
}

export default TypeormOrderRepository;
