import User from '../../Entity/User';
import { TokenParams } from '../../Types/TokemParams';

export interface IToken {
    generate(user: User): TokenParams;
}
