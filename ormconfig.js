module.exports = {
    type: 'postgres',
    database: 'scraper',
    host: 'scraperpg',
    port: 5432,
    username: 'postgres',
    password: '123qwe',
    synchronize: false,
    logging: false,
    entities: ['src/entity/**/*.ts'],
    migrations: ['src/migration/**/*.ts'],
    subscribers: ['src/subscriber/**/*.ts'],
    cli: {
        entitiesDir: 'src/entity',
        migrationsDir: 'src/migration',
        subscribersDir: 'src/subscriber',
    },
};
