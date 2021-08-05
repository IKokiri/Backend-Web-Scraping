export interface IToken {
    generate(email: string | undefined, senha: string | undefined): string;

    compare(id: number, token: string): Promise<boolean>;
}
