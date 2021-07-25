import { Request, Response } from 'express';
import getPage from '../api/getPage';
import { Notebook } from '../types/notebook';
import scraper from './scraper';

const crawler = async (req: Request, res: Response) => {
    const html = await getPage('http://localhost:8000/pageMock.html');

    const notebooks: Array<Notebook> = scraper(html);

    res.status(200).json(notebooks);
};

export default crawler;
