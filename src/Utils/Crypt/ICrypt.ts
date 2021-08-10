export interface ICrypt {
    crypt(plainText: string): Promise<string>;

    compare(plainText: string, hashText: string): Promise<boolean>;
}
