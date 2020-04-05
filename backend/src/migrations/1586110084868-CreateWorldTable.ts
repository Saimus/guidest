import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateWorldTable1586110084868 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        const extentionExist = await queryRunner.query(`SELECT * from pg_extension where extname = 'postgis'`);
        if (extentionExist.length == 0) {
            await queryRunner.query('CREATE EXTENSION postgis;');
        }
        await queryRunner.query('CREATE TABLE if not exists world (id uuid, type varchar(10))');

        const geomColumn = await queryRunner.query(
                `select attname
                    from pg_attribute
                    where attname = 'geom' 
                    and attrelid = 'world'::regclass`);
        
        if(geomColumn.length == 0) {
            await queryRunner.query(`SELECT AddGeometryColumn('world', 'geom', 4326, 'GEOMETRY',2)`);
        }

    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query('DROP TABLE world');
    }

}
