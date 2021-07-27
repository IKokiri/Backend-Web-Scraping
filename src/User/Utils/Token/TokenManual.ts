import bcryptjs from 'bcryptjs';
import { IToken } from './IToken';

class TokenManual implements IToken {
    constructor(private bcrypt = bcryptjs) {}

    generate(email: string, senha: string): string {
        return this.bcrypt.hashSync(`${email}${senha}`);
    }
}

export default TokenManual;
