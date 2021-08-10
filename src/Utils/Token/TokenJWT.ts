import jwt from 'jsonwebtoken';
import User from '../../Entity/User';
import { TokenParams } from '../../Types/TokemParams';
import { IToken } from './IToken';

class TokenJWT implements IToken {
    generate(user: User): TokenParams {
        const { id } = user;
        const token = jwt.sign({ id }, 'secret', { expiresIn: '1d' });

        const tokenParams: TokenParams = {
            id,
            token,
        };

        return tokenParams;
    }
}

export default TokenJWT;
