import { Request, Response } from 'express';
import CreateUser from './CreateUser';
import User from '../Entity/User';
import LoginUser from './LoginUser';
import CreateOrder from './CreateOrder';
import Notebook from '../Entity/Notebook';
import scraper from '../Services/webScreaperScraper';
import sortNotebookPrice from '../Utils/SortNotebookPrice';
import getOnlyModel from '../Utils/GetonlyModel';
import CreateManyNotebooks from '../Services/CreateManyNotebooks';
import GetNotebook from './GetNotebook';

class Controller {
    constructor(
        private createUser: CreateUser,
        private loginUser: LoginUser,
        private createUserOrder: CreateOrder,
        private createManyNotebooks: CreateManyNotebooks,
        private getNotebook: GetNotebook,
    ) {}

    async create(req: Request, res: Response): Promise<Response> {
        const { nome, email, senha } = req.body;
        const user = new User();
        user.nome = nome;
        user.email = email;
        user.senha = senha;

        const message = await this.createUser.create(user);

        if (!message.status) return res.status(400).json(message);
        return res.status(201).json(message);
    }

    async login(req: Request, res: Response): Promise<Response> {
        const { email, senha } = req.body;
        const message = await this.loginUser.login(email, senha);
        if (message.status) return res.status(200).send(message);
        return res.status(404).json(message);
    }

    async createOrder(req: Request, res: Response): Promise<Response> {
        const { idUser, notebooks } = req.body;
        await this.createUserOrder.create(idUser, notebooks);

        return res.status(201).send();
    }

    crawler = async (req: Request, res: Response): Promise<Response> => {
        let notebooks: Array<Notebook> = await scraper().then(data => {
            return data;
        });

        notebooks = sortNotebookPrice(notebooks);
        notebooks = getOnlyModel(notebooks, 'Lenovo');
        this.createManyNotebooks.create(notebooks);

        return res.status(200).json(notebooks);
    };

    crawlerDetails = async (req: Request, res: Response): Promise<Response> => {
        const idNotebook = +req.params.id;

        const message = await this.getNotebook.getNotebookById(idNotebook);
        return res.status(200).json(message);
    };
}

export default Controller;
