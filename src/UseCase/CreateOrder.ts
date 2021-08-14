import UserOrder from '../entity/UserOrder';
import { INotebookRepository } from '../Repository/INotebookRepository';
import { IOrderRepository } from '../Repository/IOrderRepository';
import { NotebookOrderDTO } from '../Types/NotebookOrderDTO';

class CreateOrder {
    constructor(
        private orderRepository: IOrderRepository,
        private notebookRepository: INotebookRepository,
    ) {}

    async create(
        idUser: number,
        notebooks: Array<NotebookOrderDTO>,
    ): Promise<void> {
        for (let i = 0; i < notebooks.length; i += 1) {
            const userOrder = new UserOrder();

            userOrder.idProduct = notebooks[i].id;
            userOrder.idUser = idUser;
            userOrder.quantity = notebooks[i].quantity;

            if (
                // eslint-disable-next-line no-await-in-loop
                (await this.notebookRepository.getId(userOrder.idProduct)) !==
                undefined
            )
                this.orderRepository.create(userOrder);
        }
    }
}

export default CreateOrder;
