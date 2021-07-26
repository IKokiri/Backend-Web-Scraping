import { Request, Response } from 'express';
import Notebook from '../Entity/Notebook';
import CreateManyNotebooks from '../services/createManyNotebooks';
import scraper from '../services/webScreaperScraper';
import getOnlyModel from '../utils/GetonlyModel';
import sortNotebookPrice from '../utils/SortNotebookPrice';

const crawler = async (req: Request, res: Response) => {
    let notebooks: Array<Notebook> = await scraper().then(data => {
        return data;
    });
    notebooks = sortNotebookPrice(notebooks);
    notebooks = getOnlyModel(notebooks, 'Lenovo');
    const createManyNotebooks: CreateManyNotebooks = new CreateManyNotebooks();
    createManyNotebooks.create(notebooks);
    res.status(200).json(notebooks);
};

export default crawler;
