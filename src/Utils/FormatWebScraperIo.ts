import Notebook from '../Entity/Notebook';

function removeLastSpacesString(notebook: Notebook): Notebook {
    notebook.description = notebook.description.trim();
    notebook.img = notebook.img.trim();
    notebook.model = notebook.model.trim();
    notebook.ratting = notebook.ratting.trim();

    return notebook;
}

const FormatWebScraperIo = (notebook: Notebook): Notebook => {
    return removeLastSpacesString(notebook);
};

export default FormatWebScraperIo;
