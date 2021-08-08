import { INotebookRepository } from '../Repository/INotebookRepository';
import { MessageClient } from '../Types/Message';

class DeleteNotebook {
    constructor(private deleteNotebook: INotebookRepository) {}

    async delete(id: number): Promise<MessageClient> {
        const resultDeleteNotebook = await this.deleteNotebook.delete(id);

        if (resultDeleteNotebook === undefined) {
            const responseNotebookNotFound: MessageClient = {
                status: false,
                message: 'Notebook not Found',
                data: '',
            };

            return responseNotebookNotFound;
        }

        const responseNotebookDeleted: MessageClient = {
            status: true,
            message: 'Notebook Deleted',
            data: resultDeleteNotebook,
        };

        return responseNotebookDeleted;
    }
}

export default DeleteNotebook;
