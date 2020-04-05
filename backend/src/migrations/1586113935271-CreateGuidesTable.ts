import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateGuidesTable1586113935271 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {

        await queryRunner.createTable(new Table({
            name: 'guides',
            columns: [
                {
                    name: 'id',
                    type: 'uuid',
                    isPrimary: true
                },
                {
                    name: 'name',
                    type: 'varchar(400)'
                }
            ]
        }), true);

    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.dropTable("guides");
    }
}
