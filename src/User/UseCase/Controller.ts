import { Request, Response } from 'express';
import CreateUser from './CreateUser';
import User from '../Entity/User';

class Controller {
    private createUser: CreateUser;

    constructor(createUser: CreateUser) {
        this.createUser = createUser;
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
}

export default Controller;
