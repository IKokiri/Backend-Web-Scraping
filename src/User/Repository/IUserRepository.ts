import User from '../Entity/User';

export interface IUserRepository {
    create(user: User): Promise<void>;

    getLogin(email: string, senha: string): Promise<User | undefined>;
}
