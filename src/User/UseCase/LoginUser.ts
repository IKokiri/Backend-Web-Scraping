import { IUserRepository } from '../Repository/IUserRepository';
import { IToken } from '../Utils/Token/IToken';

class LoginUser {
    constructor(
        private userRepository: IUserRepository,
        private token: IToken,
    ) {}

    async login(email: string, senha: string): Promise<string | boolean> {
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
