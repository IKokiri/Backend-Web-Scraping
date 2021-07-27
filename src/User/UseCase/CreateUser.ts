import User from '../Entity/User';
import { IUserRepository } from '../Repository/IUserRepository';
import { IEmailValidation } from '../Utils/Validation/IEmailValidation';

export class CreateUser {
    constructor(
        private userRepository: IUserRepository,
        private emailValidation: IEmailValidation,
    ) {}

    async create(data: User): Promise<void> {
        const user = new User();

        if (!this.emailValidation.validateEmail(data.email)) {
            return;
        }

        user.nome = data.nome;
        user.email = data.email;
        user.senha = data.senha;

        await this.userRepository.create(user);
    }
}
export default CreateUser;
