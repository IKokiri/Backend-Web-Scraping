import User from '../Entity/User';
import { IUserRepository } from '../Repository/IUserRepository';
import { IEmailValidation } from '../Utils/Validation/IEmailValidation';
import { INomeValidation } from '../Utils/Validation/INomeValidation';
import { ISenhaValidation } from '../Utils/Validation/ISenhaValidation';

export class CreateUser {
    constructor(
        private userRepository: IUserRepository,
        private emailValidation: IEmailValidation,
        private nomeValidation: INomeValidation,
        private senhaValidation: ISenhaValidation,
    ) {}

    async create(data: User): Promise<void> {
        const user = new User();

        if (!this.emailValidation.emailValidate(data.email)) {
            return;
        }

        if (!this.nomeValidation.nomeValidate(data.nome)) {
            return;
        }

        if (!this.senhaValidation.senhaValidate(data.senha)) {
            return;
        }

        user.nome = data.nome;
        user.email = data.email;
        user.senha = data.senha;

        await this.userRepository.create(user);
    }
}
export default CreateUser;
