import { INotebookRepository } from '../Repository/INotebookRepository';
import { MessageClient } from '../Types/Message';

class GetNotebook {
    constructor(private notebookRepository: INotebookRepository) {}

    async getNotebookById(id: string): Promise<MessageClient> {
        const notebook = await this.notebookRepository.getId(id);
        if (notebook === undefined) {
            const messageResultGetNotebook: MessageClient = {
                status: false,
                message: 'Notebook not found',
                data: '',
            };

            return messageResultGetNotebook;
        }

        const messageResultGetNotebook: MessageClient = {
            status: true,
            message: 'Notebook found successfully',
            data: notebook,
        };

        return messageResultGetNotebook;
    }
}

export default GetNotebook;
