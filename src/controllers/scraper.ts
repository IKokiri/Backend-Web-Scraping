import cheerio from 'cheerio';
import { Notebook } from '../types/notebook';
import FormatWebScraperIo from '../utils/FormatWebScraperIo';

const scraper = (html: string): Array<Notebook> => {
    const Notebooks: Array<Notebook> = [];

    const $ = cheerio.load(html);
    const sectionNotebooks = $('body').find('.thumbnail');

    sectionNotebooks.map((i, element) => {
        const description = $(element).find('.description').text();
        const img = $(element).find('img').attr('src')!;
        const model = $(element).find('.title').attr('title')!;
        const price = $(element).find('.price').text();
        const ratting = $(element).find('.ratings p').text();

        const notebookMap: Notebook = {
            description,
            img,
            model,
            price,
            ratting,
        };

        Notebooks.push(FormatWebScraperIo(notebookMap));

        return notebookMap;
    });

    return Notebooks;
};

export default scraper;
