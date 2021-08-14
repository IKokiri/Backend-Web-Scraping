import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class nootbookInitial1628944587253 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'user',
                columns: [
                    {
                        name: 'id',
                        type: 'string',
                        generationStrategy: 'uuid',
                        isPrimary: true,
                        default: 'uuid_generate_v4()',
                    },
                    {
                        name: 'nome',
                        type: 'string',
                    },
                    {
                        name: 'email',
                        type: 'string',
                    },
                    {
                        name: 'senha',
                        type: 'string',
                    },
                ],
            }),
            true,
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('user');
    }
}

export default nootbookInitial1628944587253;
