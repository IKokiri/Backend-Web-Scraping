import bcriptjs from 'bcryptjs';
import { ICrypt } from './ICrypt';

class Bcript implements ICrypt {
    private salt = 10;

    async compare(plainText: string, hashText: string): Promise<boolean> {
        return bcriptjs.compare(plainText, hashText);
    }

    async crypt(plainText: string): Promise<string> {
        return bcriptjs.hash(plainText, this.salt);
    }
}

export default Bcript;
