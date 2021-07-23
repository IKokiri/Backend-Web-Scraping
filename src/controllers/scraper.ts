import cheerio from 'cheerio';

const scraper = (html: string): any => {
    const $ = cheerio.load(html);
    const sectionNotebooks = $('body').find('.thumbnail');

    sectionNotebooks.map((i, element) => {
        console.log($(element).find('.title').attr('title'));
        console.log($(element).find('.description').text());
        console.log($(element).find('.ratings p').text());
        console.log($(element).find('img').attr('src'));
        console.log($(element).find('.price').text());
        console.log('****************');
        return 1;
    });
};

export default scraper;
