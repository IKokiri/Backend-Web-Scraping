import Notebook from '../entity/Notebook';
import CreateNotebook from '../UseCase/CreateNotebook';
import { ICreateManyNotebooks } from './ICreateManyNotebooks';

class CreateManyNotebooks implements ICreateManyNotebooks {
    constructor(private createNotebook: CreateNotebook) {}

    create(notebooks: Array<Notebook>): void {
        for (let i = 0; i < notebooks.length; i += 1) {
            this.createNotebook.create(notebooks[i]);
        }
    }
}

export default CreateManyNotebooks;
