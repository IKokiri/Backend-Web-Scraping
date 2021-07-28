const getIdWebScraper = (link: string): number => {
    const l = link.split('/');
    return +l[l.length - 1];
};

export default getIdWebScraper;
