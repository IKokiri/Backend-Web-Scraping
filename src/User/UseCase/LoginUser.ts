import { IUserRepository } from '../Repository/IUserRepository';
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

    async login(email: string, senha: string): Promise<string | boolean> {
        if (!this.emailValidation.emailValidate(email)) {
            return false;
        }

        if (!this.senhaValidation.senhaValidate(senha)) {
            return false;
        }

        const promiseUser = this.userRepository.getLogin(email, senha);

        const user = await promiseUser
            .then(data => {
                return data;
            })
            .catch();

        return user
            ? this.token.generate(user?.email, user?.senha).toString()
            : false;
    }
}

export default LoginUser;
