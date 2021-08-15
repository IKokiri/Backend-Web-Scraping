import Notebook from '../entity/Notebook';
import { INotebookRepository } from '../Repository/INotebookRepository';

class CreateNotebook {
    constructor(private notebookRepository: INotebookRepository) {}

    async create(notebook: Notebook): Promise<void> {
        const resultGetNotebook = await this.notebookRepository.getId(
            notebook.id,
        );

        if (resultGetNotebook === undefined)
            this.notebookRepository.create(notebook);
    }
}

export default CreateNotebook;
