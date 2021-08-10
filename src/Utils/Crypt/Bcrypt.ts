import bcriptjs from 'bcryptjs';
import { ICrypt } from './ICrypt';

class Bcript implements ICrypt {
    private salt = 10;

    async crypt(plainText: string): Promise<string> {
        return bcriptjs.hash(plainText, this.salt);
    }
}

export default Bcript;
