const getIdWebScraper = (link: string): string => {
    const l = link.split('/');
    return l[l.length - 1];
};

export default getIdWebScraper;
