import { Request, Response } from 'express';
import getPage from '../api/getPage';

const crawler = async (req: Request, res: Response) => {
    
    const test = await getPage(
        'https://webscraper.io/test-sites/e-commerce/allinone/computers/laptops',
    );

    console.log(test);

    res.status(200).json({ status: true });
};

export default crawler;
