import { IUserRepository } from '../Repository/IUserRepository';
import { MessageClient } from '../Types/Message';
import { ICrypt } from '../Utils/Crypt/ICrypt';
import { IToken } from '../Utils/Token/IToken';
import { IEmailValidation } from '../Utils/Validation/IEmailValidation';
import { ISenhaValidation } from '../Utils/Validation/ISenhaValidation';

class LoginUser {
    constructor(
        private userRepository: IUserRepository,
        private token: IToken,
        private emailValidation: IEmailValidation,
        private senhaValidation: ISenhaValidation,
        private comparePasswordHash: ICrypt,
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
                message: 'Password is not valid!',
                data: '',
            };
            return messageValidateuserPassword;
        }

        const promiseUser = this.userRepository.getLogin(email);

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

        const resultComparePasswordHash =
            await this.comparePasswordHash.compare(senha, user!.senha);

        if (!resultComparePasswordHash) {
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
                token: this.token.generate(user).token,
            },
        };

        return messageToken;
    }
}

export default LoginUser;
