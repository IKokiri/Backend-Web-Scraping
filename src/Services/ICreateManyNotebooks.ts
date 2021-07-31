import Notebook from '../Entity/Notebook';

export interface ICreateManyNotebooks {
    create(notebooks: Array<Notebook>): void;
}
