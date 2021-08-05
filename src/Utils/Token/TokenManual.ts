import bcryptjs from 'bcryptjs';
import User from '../../Entity/User';
import { IUserRepository } from '../../Repository/IUserRepository';
import { IToken } from './IToken';

class TokenManual implements IToken {
    constructor(
        private bcrypt = bcryptjs,
        private userRepository: IUserRepository,
    ) {}

    async compare(id: number, token: string): Promise<boolean> {
        const user: User | undefined = await this.userRepository.getUserById(
            id,
        );

        return this.bcrypt.compareSync(`${user?.email}${user?.senha}`, token);
    }

    generate(email: string, senha: string): string {
        return this.bcrypt.hashSync(`${email}${senha}`);
    }
}

export default TokenManual;
