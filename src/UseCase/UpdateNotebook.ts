import Notebook from '../entity/Notebook';
import { INotebookRepository } from '../Repository/INotebookRepository';
import { MessageClient } from '../Types/Message';

class UpdateNotebook {
    constructor(private updateNotebook: INotebookRepository) {}

    async update(id: number, notebook: Notebook): Promise<MessageClient> {
        const resultUpdateNotebook = await this.updateNotebook.update(
            id,
            notebook,
        );

        if (resultUpdateNotebook === undefined) {
            const messageNotFoundNotebook: MessageClient = {
                status: false,
                message: 'Notebook not found!',
                data: '',
            };

            return messageNotFoundNotebook;
        }

        const messageNotebookUpdated: MessageClient = {
            status: true,
            message: 'Notebook has been updated!',
            data: resultUpdateNotebook,
        };
        return messageNotebookUpdated;
    }
}

export default UpdateNotebook;
