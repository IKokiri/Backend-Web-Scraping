import { getRepository, Repository } from 'typeorm';
import Notebook from '../entity/Notebook';
import { INotebookRepository } from './INotebookRepository';

class NotebookRepository implements INotebookRepository {
    private repository: Repository<Notebook> | undefined;

    create(notebook: Notebook): void {
        this.repository = getRepository(Notebook);
        this.repository.save(notebook);
    }

    async getId(id: number): Promise<Notebook | undefined> {
        this.repository = getRepository(Notebook);
        const data: Notebook | undefined = await this.repository.findOne({
            where: { id },
        });
        return data;
    }

    async update(
        id: number,
        notebook: Notebook,
    ): Promise<Notebook | undefined> {
        this.repository = getRepository(Notebook);
        const notebookFetched = await this.repository.findOne(id);

        if (notebookFetched === undefined) {
            return undefined;
        }

        notebookFetched.description = notebook.description;
        notebookFetched.img = notebook.img;
        notebookFetched.model = notebook.model;
        notebookFetched.price = notebook.price;
        notebookFetched.ratting = notebook.ratting;
        notebookFetched.idNotebook = notebook.idNotebook;
        notebookFetched.linkDetails = notebook.linkDetails;

        const result = await notebookFetched.save();

        return result;
    }

    async getAll(): Promise<Notebook[] | undefined> {
        this.repository = getRepository(Notebook);

        const result = await this.repository.find();

        return result;
    }

    async delete(id: number): Promise<Notebook | undefined> {
        this.repository = getRepository(Notebook);

        const notebookFetched = await this.repository.findOne(id);

        if (notebookFetched === undefined) {
            return undefined;
        }

        const result = await notebookFetched.remove();

        return result;
    }
}

export default NotebookRepository;
