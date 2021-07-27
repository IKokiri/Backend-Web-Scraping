import User from '../Entity/User';
import { IUserRepository } from '../Repository/IUserRepository';

export class CreateUser {
    private userRepository: IUserRepository;

    constructor(userRepository: IUserRepository) {
        this.userRepository = userRepository;
    }

    async create(data: User) {
        const user = new User();

        user.nome = data.nome;
        user.email = data.email;
        user.senha = data.senha;

        await this.userRepository.create(user);
    }
}
export default CreateUser;
