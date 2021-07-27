import { IEmailValidation } from './IEmailValidation';

class EmailValidationManual implements IEmailValidation {
    private email: string;

    constructor() {
        this.email = '';
    }

    emailValidate(email: string): boolean {
        this.email = email;
        return this.email.includes('@');
    }
}

export default EmailValidationManual;
