import UserOrder from '../Entity/UserOrder';
import { IOrderRepository } from '../Repository/IOrderRepository';
import { NotebookOrderDTO } from '../Types/NotebookOrderDTO';

class CreateOrder {
    constructor(private orderRepository: IOrderRepository) {}

    create(idUser: number, notebooks: Array<NotebookOrderDTO>): void {
        for (let i = 0; i < notebooks.length; i += 1) {
            const userOrder = new UserOrder();

            userOrder.idProduct = notebooks[i].id;
            userOrder.idUser = idUser;
            userOrder.quantity = notebooks[i].quantity;

            this.orderRepository.create(userOrder);
        }
    }
}

export default CreateOrder;
