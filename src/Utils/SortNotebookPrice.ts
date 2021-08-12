import Notebook from '../Entity/Notebook';

const sortNotebookPrice = (notebooks: Array<Notebook>): Array<Notebook> => {
    const sortedNotebooks: Array<Notebook> = notebooks.sort((obj1, obj2) => {
        if (obj1.price > obj2.price) {
            return 1;
        }

        if (obj1.price < obj2.price) {
            return -1;
        }

        return 0;
    });

    return sortedNotebooks;
};

export default sortNotebookPrice;
