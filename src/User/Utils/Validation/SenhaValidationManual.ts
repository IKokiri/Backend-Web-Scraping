import { ISenhaValidation } from './ISenhaValidation';

class SenhaValidationManual implements ISenhaValidation {
    private senha: string;

    constructor() {
        this.senha = '';
    }

    senhaValidate(senha: string): boolean {
        this.senha = senha;

        return this.senha !== '';
    }
}

export default SenhaValidationManual;
