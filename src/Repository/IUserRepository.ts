import User from '../entity/User';

export interface IUserRepository {
    create(user: User): void;

    getLogin(email: string): Promise<User | undefined>;

    getUserByEmail(email: string): Promise<User | undefined>;

    getUserById(id: string): Promise<User | undefined>;
}
