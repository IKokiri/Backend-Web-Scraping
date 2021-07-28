import cheerio from 'cheerio';
import Notebook from '../Entity/Notebook';
import FormatWebScraperIo from '../Utils/FormatWebScraperIo';
import getPage from '../API/getPage';
import getIdWebScraper from '../Utils/GetIdWebScraper';

const scraper = async (): Promise<Array<Notebook>> => {
    const linkBase = 'https://webscraper.io/test-sites/e-commerce/allinone/';
    const linkScraper = `${linkBase}computers/laptops`;
    const html = await getPage(linkScraper);

    const Notebooks: Array<Notebook> = [];

    const $ = cheerio.load(html);
    const sectionNotebooks = $('body').find('.thumbnail');
    sectionNotebooks.map((i, element) => {
        const notebook: Notebook = new Notebook();

        const description = $(element).find('.description').text();
        const img = $(element).find('img').attr('src')!;
        const model = $(element).find('.title').attr('title')!;
        const price = $(element).find('.price').text().replace('$', '');
        const ratting = $(element).find('.ratings p').text();
        const idNotebook = getIdWebScraper(
            $(element).find('.title').attr('href')!,
        );
        const linkDetails = `${linkBase}product/${idNotebook}`;

        notebook.description = description;
        notebook.img = img;
        notebook.model = model;
        notebook.price = parseFloat(price);
        notebook.ratting = ratting;
        notebook.idNotebook = idNotebook;
        notebook.linkDetails = linkDetails;

        Notebooks.push(FormatWebScraperIo(notebook));

        return notebook;
    });

    return Notebooks;
};

export default scraper;
