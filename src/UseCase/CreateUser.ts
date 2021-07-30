import User from '../Entity/User';
import { IUserRepository } from '../Repository/IUserRepository';
import { MessageClient } from '../Types/Message';
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

    async create(data: User): Promise<MessageClient> {
        const user = new User();

        const resultGetUserByEmail = await this.userRepository.getUserByEmail(
            data.email,
        );

        if (resultGetUserByEmail !== undefined) {
            const messageGetUserByEmail: MessageClient = {
                status: false,
                message: 'User already exists',
                data: '',
            };
            return messageGetUserByEmail;
        }

        if (
            data.email === undefined ||
            !this.emailValidation.emailValidate(data.email)
        ) {
            const messageValidateUserByEmail: MessageClient = {
                status: false,
                message: 'E-Mail is not valid',
                data: '',
            };
            return messageValidateUserByEmail;
        }

        if (
            data.nome === undefined ||
            !this.nomeValidation.nomeValidate(data.nome)
        ) {
            const messageValidateUserName: MessageClient = {
                status: false,
                message: 'Name is not valid',
                data: '',
            };
            return messageValidateUserName;
        }

        if (
            data.senha === undefined ||
            !this.senhaValidation.senhaValidate(data.senha)
        ) {
            const messageValidateuserPassword: MessageClient = {
                status: false,
                message: 'Password is not valid',
                data: '',
            };
            return messageValidateuserPassword;
        }

        user.nome = data.nome;
        user.email = data.email;
        user.senha = data.senha;

        const resultCreate = await this.userRepository.create(user);

        const messageUserCreated: MessageClient = {
            status: true,
            message: 'Successfully created',
            data: resultCreate,
        };

        return messageUserCreated;
    }
}
export default CreateUser;
