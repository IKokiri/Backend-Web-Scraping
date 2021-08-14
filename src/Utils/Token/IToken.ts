import User from '../../entity/User';
import { TokenParams } from '../../Types/TokemParams';

export interface IToken {
    generate(user: User): TokenParams;
}
