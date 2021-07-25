import Notebook from '../Entity/Notebook';

class Repository {
    private notebook!: Notebook;

    create(notebook: Notebook): void {
        this.notebook = notebook;
        Notebook.insert(this.notebook);
    }
}

export default Repository;
