import { getRepository } from 'typeorm';
import Notebook from '../Entity/Notebook';

class Repository {
    private notebook!: Notebook;

    private notebookDetail = getRepository(Notebook);

    create(notebook: Notebook): void {
        this.notebook = notebook;
        Notebook.insert(this.notebook);
    }

    async getId(id: number): Promise<Notebook | undefined> {
        const data: Notebook | undefined = await this.notebookDetail.findOne({
            where: { idNotebook: id },
        });
        return data;
    }
}

export default Repository;
