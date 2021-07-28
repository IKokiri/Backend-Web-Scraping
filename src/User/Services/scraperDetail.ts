import cheerio from 'cheerio';
import getPage from '../API/getPage';
import Notebook from '../Entity/Notebook';
import NotebookDetail from '../Entity/NotebookDetail';

const scraperDetail = async (notebook: Notebook): Promise<NotebookDetail> => {
    const html = await getPage(notebook.linkDetails);
    const $ = cheerio.load(html);
    const notebookSelected = $('body').find('.thumbnail');
    let notebookDetail: NotebookDetail = new NotebookDetail();

    notebookSelected.map((i, element) => {
        const details = new NotebookDetail();

        details.idNotebook = notebook.idNotebook;
        details.img = $(element).find('img').attr('src')!;
        details.model = $(element).find('.caption h4').next().text();
        details.price = +$(element)
            .find('.caption h4')
            .first()
            .text()
            .replace('$', '');
        details.ratting = $(element).find('.ratings p').text().trim();
        details.description = $(element).find('.description').text();

        notebookDetail = details;
        return details;
    });

    return notebookDetail;
};

export default scraperDetail;
