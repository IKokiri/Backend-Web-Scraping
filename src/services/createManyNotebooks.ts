import Notebook from '../Entity/Notebook';
import Repository from '../Repository/repository';

class createManyNotebooks {
    private repository: Repository = new Repository();

    create(notebooks: Array<Notebook>): void {
        for (let i = 0; i <= notebooks.length; i += 1) {
            this.repository.create(notebooks[i]);
        }
    }
}

export default createManyNotebooks;
