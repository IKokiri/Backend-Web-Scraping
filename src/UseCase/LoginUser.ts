import { IUserRepository } from '../Repository/IUserRepository';
import { MessageClient } from '../Types/Message';
import { IToken } from '../Utils/Token/IToken';
import { IEmailValidation } from '../Utils/Validation/IEmailValidation';
import { ISenhaValidation } from '../Utils/Validation/ISenhaValidation';

class LoginUser {
    constructor(
        private userRepository: IUserRepository,
        private token: IToken,
        private emailValidation: IEmailValidation,
        private senhaValidation: ISenhaValidation,
    ) {}

    async login(email: string, senha: string): Promise<MessageClient> {
        if (email === undefined || !this.emailValidation.emailValidate(email)) {
            const messageValidateUserByEmail: MessageClient = {
                status: false,
                message: 'E-Mail is not valid',
                data: '',
            };
            return messageValidateUserByEmail;
        }

        if (senha === undefined || !this.senhaValidation.senhaValidate(senha)) {
            const messageValidateuserPassword: MessageClient = {
                status: false,
                message: 'Password is not valid',
                data: '',
            };
            return messageValidateuserPassword;
        }

        const promiseUser = this.userRepository.getLogin(email, senha);

        const user = await promiseUser
            .then(data => {
                return data;
            })
            .catch();

        if (user === undefined) {
            const messageNotFoundUser: MessageClient = {
                status: false,
                message: 'Login not found!',
                data: '',
            };

            return messageNotFoundUser;
        }

        const messageToken: MessageClient = {
            status: true,
            message: 'Login successfully',
            data: {
                token: this.token.generate(user?.email, user?.senha).toString(),
            },
        };

        return messageToken;
    }
}

export default LoginUser;
