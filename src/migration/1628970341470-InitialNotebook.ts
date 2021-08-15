import { MigrationInterface, QueryRunner, Table } from 'typeorm';

class InitialNotebook1628970341470 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'notebook',
                columns: [
                    {
                        name: 'id',
                        type: 'varchar',
                        generationStrategy: 'uuid',
                        isPrimary: true,
                    },
                    {
                        name: 'description',
                        type: 'varchar',
                    },
                    {
                        name: 'img',
                        type: 'varchar',
                    },
                    {
                        name: 'model',
                        type: 'varchar',
                    },
                    {
                        name: 'price',
                        type: 'float',
                    },
                    {
                        name: 'ratting',
                        type: 'varchar',
                    },
                    {
                        name: 'idNotebook',
                        type: 'varchar',
                    },
                    {
                        name: 'linkDetails',
                        type: 'varchar',
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
