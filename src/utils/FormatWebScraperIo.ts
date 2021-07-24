import { Notebook } from '../types/notebook';

const FormatWebScraperIo = (notebook: Notebook): Notebook => {
    return notebook;
};

function removeLastSpacesString(notebook: Notebook): Notebook {
    notebook.description = notebook.description.trim();
    notebook.img = notebook.img.trim();
    notebook.model = notebook.model.trim();
    notebook.price = notebook.price.trim();
    notebook.ratting = notebook.ratting.trim();

    return notebook;
}

export default FormatWebScraperIo;
