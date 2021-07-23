import cheerio from 'cheerio';

const scraper = (html: string): string => {
    const $ = cheerio.load(html);

    const teste = $('.thumbnail .price');

    return teste.text();
};

export default scraper;
