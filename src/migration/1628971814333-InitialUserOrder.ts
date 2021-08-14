import { MigrationInterface, QueryRunner, Table } from 'typeorm';

class InitialUserOrder1628971814333 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'userOrder',
                columns: [
                    {
                        name: 'id',
                        type: 'string',
                        generationStrategy: 'uuid',
                        isPrimary: true,
                        default: 'uuid_generate_v4()',
                    },
                    {
                        name: 'idProduct',
                        type: 'int',
                    },
                    {
                        name: 'idUser',
                        type: 'string',
                    },
                    {
                        name: 'quantity',
                        type: 'int',
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

export default InitialUserOrder1628971814333;
