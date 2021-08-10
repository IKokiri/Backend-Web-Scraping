import User from '../Entity/User';

export interface IUserRepository {
    create(user: User): void;

    getLogin(email: string): Promise<User | undefined>;

    getUserByEmail(email: string): Promise<User | undefined>;

    getUserById(id: number): Promise<User | undefined>;
}
