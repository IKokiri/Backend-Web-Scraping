import Notebook from '../entity/Notebook';

export interface ICreateManyNotebooks {
    create(notebooks: Array<Notebook>): void;
}
