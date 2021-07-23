import axios from 'axios';

const getPage = (url: string): Promise<any> => {
    return axios(url)
        .then(response => {
            const html = response.data;
            return html;
        })
        .catch(console.error);
};

export default getPage;
