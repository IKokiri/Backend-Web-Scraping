import { getRepository, Repository } from 'typeorm';
import Notebook from '../Entity/Notebook';
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
            where: { idNotebook: id },
        });
        return data;
    }
}

export default NotebookRepository;
