import { getRepository, Repository } from 'typeorm';
import User from '../Entity/User';
import { IUserRepository } from './IUserRepository';

class TypeormUserRepository implements IUserRepository {
    private repository: Repository<User>;

    create(user: User): Promise<void> {
        this.repository = getRepository(User);
        this.repository.insert(user);
    }
}

export default TypeormUserRepository;
