module.exports = {
    type: process.env.DB_TYPE,
    database: process.env.DB_DATABASE,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    synchronize: process.env.DB_SYNCHRONIZE,
    logging: process.env.DB_LOGGING,
    entities: [`${process.env.FOLDER}/entity/**/*.${process.env.EXTENSION}`],
    migrations: [
        `${process.env.FOLDER}/migration/**/*.${process.env.EXTENSION}`,
    ],
    subscribers: [
        `${process.env.FOLDER}/subscriber/**/*.${process.env.EXTENSION}`,
    ],
    cli: {
        entitiesDir: `${process.env.FOLDER}/entity`,
        migrationsDir: `${process.env.FOLDER}/migration`,
        subscribersDir: `${process.env.FOLDER}/subscriber`,
    },
};
