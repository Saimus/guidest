import { ConnectionOptions } from 'typeorm';
import { Guide } from './guides/guide.entity';
import { CreateWorldTable1586110084868 } from './migrations/1586110084868-CreateWorldTable';
import { CreateGuidesTable1586113935271 } from './migrations/1586113935271-CreateGuidesTable';

export const config: ConnectionOptions = {
    type: 'postgres',
    host: '127.0.0.1',
    port: 5432,
    username: 'postgres',
    password: '12345678a',
    database: 'guidest',
    entities: [Guide],    
    migrations: [CreateWorldTable1586110084868, CreateGuidesTable1586113935271],
    migrationsRun: true,
    synchronize: false,
  cli: {
    migrationsDir: 'migrations',
  },
};
