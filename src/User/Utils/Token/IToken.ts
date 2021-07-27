export interface IToken {
    generate(email: string | undefined, senha: string | undefined): string;
}
