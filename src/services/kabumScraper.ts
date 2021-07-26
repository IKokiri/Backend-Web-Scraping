import cheerio from 'cheerio';
import Notebook from '../Entity/Notebook';
import FormatWebScraperIo from '../utils/FormatWebScraperIo';
import getPage from '../api/getPage';

const scraper = async (): Promise<Array<Notebook>> => {
    const html = await getPage(
        'https://www.kabum.com.br/computadores/notebooks-ultrabooks?pagina=1&ordem=5&limite=30&prime=false&marcas=["205"]&tipo_produto=[]&filtro=[]',
    );

    const Notebooks: Array<Notebook> = [];

    const $ = cheerio.load(html);
    const sectionNotebooks = $('body').find('.sc-fzqNqU');
    sectionNotebooks.map((i, element) => {
        const notebook: Notebook = new Notebook();

        const description = $(element).find('.item-nome').text();
        const img = $(element).find('a img').attr('src')!;
        const model = $(element).find('.sc-fzozJi .item-nome').text()!;
        const price = $(element).find('.sc-fzoXzr .qatGF').text();
        const ratting = '';
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
