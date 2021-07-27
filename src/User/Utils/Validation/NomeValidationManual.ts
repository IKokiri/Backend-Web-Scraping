import { INomeValidation } from './INomeValidation';

class NomeValidationManual implements INomeValidation {
    private nome: string;

    constructor() {
        this.nome = '';
    }

    nomeValidate(nome: string): boolean {
        this.nome = nome;
        return this.nome !== '';
    }
}
export default NomeValidationManual;
