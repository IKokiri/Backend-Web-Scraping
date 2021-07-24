import { Request, Response } from 'express';
import getPage from '../api/getPage';
import { Notebook } from '../types/notebook';
import scraper from './scraper';

const crawler = async (req: Request, res: Response) => {
    const html = await getPage(
        'https://webscraper.io/test-sites/e-commerce/allinone/computers/laptops',
    );

    const notebooks: Array<Notebook> = scraper(html);

    res.status(200).json({ status: notebooks });
};

export default crawler;
