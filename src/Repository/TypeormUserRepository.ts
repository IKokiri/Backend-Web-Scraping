import { getRepository, Repository } from 'typeorm';
import User from '../Entity/User';
import { IUserRepository } from './IUserRepository';

class TypeormUserRepository implements IUserRepository {
    private repository: Repository<User> | undefined;

    async create(user: User): Promise<User | undefined> {
        this.repository = getRepository(User);
        const resultCreateUser = this.repository.save(user);
        const resultPromisseCreateUser = await resultCreateUser.then(data => {
            return data;
        });
        return resultPromisseCreateUser;
    }

    async getLogin(email: string, senha: string): Promise<User | undefined> {
        this.repository = getRepository(User);
        return this.repository.findOne({ where: { email, senha } });
    }

    async getUserByEmail(email: string): Promise<User | undefined> {
        this.repository = getRepository(User);

        const resultFindUser: User | undefined = await this.repository.findOne({
            where: { email },
        });

        return resultFindUser;
    }
}

export default TypeormUserRepository;
