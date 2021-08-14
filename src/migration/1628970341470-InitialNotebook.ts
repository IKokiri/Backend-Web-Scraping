import { MigrationInterface, QueryRunner, Table } from 'typeorm';

class InitialNotebook1628970341470 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'notebook',
                columns: [
                    {
                        name: 'id',
                        type: 'string',
                        generationStrategy: 'uuid',
                        isPrimary: true,
                        default: 'uuid_generate_v4()',
                    },
                    {
                        name: 'description',
                        type: 'string',
                    },
                    {
                        name: 'img',
                        type: 'string',
                    },
                    {
                        name: 'model',
                        type: 'string',
                    },
                    {
                        name: 'price',
                        type: 'float',
                    },
                    {
                        name: 'ratting',
                        type: 'string',
                    },
                    {
                        name: 'idNotebook',
                        type: 'int',
                    },
                    {
                        name: 'linkDetails',
                        type: 'string',
                    },
                ],
            }),
            true,
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('notebook');
    }
}

export default InitialNotebook1628970341470;
