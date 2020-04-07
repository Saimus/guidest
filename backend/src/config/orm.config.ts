import { ConnectionOptions } from 'typeorm';
/*import { Guide } from './guides/guide.entity';
import { CreateWorldTable1586110084868 } from './migrations/1586110084868-CreateWorldTable';
import { CreateGuidesTable1586113935271 } from './migrations/1586113935271-CreateGuidesTable';
*/

export const ormConfig: ConnectionOptions = {
    type: 'postgres',
    host: process.env.TYPEORM_HOST || '127.0.0.1',
    port: parseInt(process.env.TYPEORM_PORT, 10) || 5432,
    username: process.env.TYPEORM_USERNAME || 'postgres',
    password: process.env.TYPEORM_PASSWORD || '12345678a',
    database: process.env.TYPEORM_DATABASE || 'guidest',
    logging: false,
    //entities: [Guide],
    entities: ["dist/**/*.entity.js"],    
    //migrations: [CreateWorldTable1586110084868, CreateGuidesTable1586113935271],
    migrations: ["dist/migrations/*.js"],
    migrationsRun: true,
    synchronize: false,    
    cli: {
      migrationsDir: 'migrations',
    },
};
