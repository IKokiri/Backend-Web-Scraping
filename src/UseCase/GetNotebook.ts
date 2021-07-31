import Notebook from '../Entity/Notebook';
import { INotebookRepository } from '../Repository/INotebookRepository';

class GetNotebook {
    constructor(private notebookRepository: INotebookRepository) {}

    async getNotebookById(id: number): Promise<Notebook | undefined> {
        const notebook = await this.notebookRepository.getId(id);
        return notebook;
    }
}

export default GetNotebook;
