import { Request, Response } from 'express';
import getPage from '../api/getPage';
import scraper from './scraper';

const crawler = async (req: Request, res: Response) => {
    const html = await getPage(
        'https://webscraper.io/test-sites/e-commerce/allinone/computers/laptops',
    );

    const elements = scraper(html);

    res.status(200).json({ status: true });
};

export default crawler;
