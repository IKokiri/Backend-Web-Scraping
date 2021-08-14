import Notebook from '../entity/Notebook';

const getOnlyModel = (
    notebooks: Array<Notebook>,
    model: string,
): Array<Notebook> => {
    const notebooksOnlyOneModel: Array<Notebook> = notebooks.filter(not => {
        return not.model.includes(model);
    });

    return notebooksOnlyOneModel;
};

export default getOnlyModel;
