import { INotebookRepository } from '../Repository/INotebookRepository';
import { MessageClient } from '../Types/Message';

class GetNotebooks {
    constructor(private notebookRepository: INotebookRepository) {}

    async getNotebooks(): Promise<MessageClient> {
        const result = await this.notebookRepository.getAll();

        if (result === undefined) {
            const messageNotebooksNotFound: MessageClient = {
                status: false,
                message: 'Notebooks Not Found',
                data: '',
            };

            return messageNotebooksNotFound;
        }

        const messageNotebooksList: MessageClient = {
            status: true,
            message: 'found notebooks!',
            data: result,
        };

        return messageNotebooksList;
    }
}

export default GetNotebooks;
