import { Request, Response } from 'express';
import Notebook from '../Entity/Notebook';
import NotebookDetail from '../Entity/NotebookDetail';
import Repository from '../Repository/repository';
import scraperDetail from '../services/scraperDetail';

const crawlerDetails = async (req: Request, res: Response) => {
    const idNotebook = +req.params.id;
    const repositoryNotebook = new Repository();
    let notebook = new Notebook();
    const promiseNotebook = repositoryNotebook.getId(idNotebook);
    notebook = await promiseNotebook
        .then(data => {
            const note: Notebook = data;
            return note;
        })
        .catch();

    const promiseNotebookDetail = scraperDetail(notebook);

    const notebookDetail: NotebookDetail = await promiseNotebookDetail
        .then(data => {
            return data;
        })
        .catch();

    res.status(200).json(notebookDetail);
};

export default crawlerDetails;
