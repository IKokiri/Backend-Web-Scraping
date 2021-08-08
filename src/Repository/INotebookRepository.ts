import Notebook from '../Entity/Notebook';

export interface INotebookRepository {
    create(notebook: Notebook): void;

    getId(id: number): Promise<Notebook | undefined>;

    update(id: number, notebook: Notebook): Promise<Notebook | undefined>;

    getAll(): Promise<Notebook[] | undefined>;

    delete(id: number): Promise<Notebook | undefined>;
}
