import { Request, Response } from 'express';
import Notebook from '../Entity/Notebook';
import CreateManyNotebooks from '../services/createManyNotebooks';
import scraper from '../services/localScraper';

const crawler = async (req: Request, res: Response) => {
    const notebooks: Array<Notebook> = await scraper().then(data => {
        return data;
    });

    const createManyNotebooks: CreateManyNotebooks = new CreateManyNotebooks();
    createManyNotebooks.create(notebooks);
    res.status(200).json(notebooks);
};

export default crawler;
