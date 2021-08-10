export interface ICrypt {
    crypt(plainText: string): Promise<string>;
}
