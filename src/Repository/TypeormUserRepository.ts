import { getRepository, Repository } from 'typeorm';
import User from '../Entity/User';
import { IUserRepository } from './IUserRepository';

class TypeormUserRepository implements IUserRepository {
    private repository: Repository<User> | undefined;

    create(user: User): void {
        this.repository = getRepository(User);
        this.repository.insert(user);
    }

    async getLogin(email: string, senha: string): Promise<User | undefined> {
        this.repository = getRepository(User);
        return this.repository.findOne({ where: { email, senha } });
    }
}

export default TypeormUserRepository;
