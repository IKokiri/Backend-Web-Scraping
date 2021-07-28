import Notebook from '../../Entity/Notebook';
import User from '../Entity/User';
import UserOrder from '../Entity/UserOrder';
import { IOrderRepository } from '../Repository/IOrderRepository';

class CreateOrder {
    constructor(private orderRepository: IOrderRepository) {}

    order(user: User, notebooks: Array<Notebook>, quantity: number): void {
        for (let i = 0; i < notebooks.length; i += 1) {
            const userOrder = new UserOrder();

            userOrder.idProduct = notebooks[i].id;
            userOrder.idUser = user.id;
            userOrder.quantity = quantity;

            this.orderRepository.create(userOrder);
        }
    }
}

export default CreateOrder;
