import cheerio from 'cheerio';
import Notebook from '../Entity/Notebook';
import FormatWebScraperIo from '../utils/FormatWebScraperIo';

const scraper = (html: string): Array<Notebook> => {
    const Notebooks: Array<Notebook> = [];

    const $ = cheerio.load(html);
    const sectionNotebooks = $('body').find('.thumbnail');

    sectionNotebooks.map((i, element) => {
        const notebook: Notebook = new Notebook();

        const description = $(element).find('.description').text();
        const img = $(element).find('img').attr('src')!;
        const model = $(element).find('.title').attr('title')!;
        const price = $(element).find('.price').text();
        const ratting = $(element).find('.ratings p').text();

        notebook.description = description;
        notebook.img = img;
        notebook.model = model;
        notebook.price = price;
        notebook.ratting = ratting;

        Notebooks.push(FormatWebScraperIo(notebook));

        return notebook;
    });

    return Notebooks;
};

export default scraper;
