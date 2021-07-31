import Notebook from '../Entity/Notebook';

export interface INotebookRepository {
    create(notebook: Notebook): void;

    getId(id: number): Promise<Notebook | undefined>;
}
