import Notebook from '../entity/Notebook';

export interface INotebookRepository {
    create(notebook: Notebook): void;

    getId(id: string): Promise<Notebook | undefined>;

    getOriginId(id: string): Promise<Notebook | undefined>;

    update(id: string, notebook: Notebook): Promise<Notebook | undefined>;

    getAll(): Promise<Notebook[] | undefined>;

    delete(id: string): Promise<Notebook | undefined>;
}
