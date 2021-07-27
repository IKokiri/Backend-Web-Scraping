import { Request, Response } from 'express';
import CreateUser from './CreateUser';
import User from '../Entity/User';
import LoginUser from './LoginUser';

class Controller {
    private createUser: CreateUser;

    private loginUser: LoginUser;

    constructor(createUser: CreateUser, loginUser: LoginUser) {
        this.createUser = createUser;
        this.loginUser = loginUser;
    }

    async create(req: Request, res: Response): Promise<Response> {
        const { nome, email, senha } = req.body;
        const user = new User();
        user.nome = nome;
        user.email = email;
        user.senha = senha;

        await this.createUser.create(user);
        return res.status(201).send();
    }

    async login(req: Request, res: Response): Promise<Response> {
        const { email, senha } = req.body;

        const token = await this.loginUser.login(email, senha);
        return res.status(200).send(token);
    }
}

export default Controller;
