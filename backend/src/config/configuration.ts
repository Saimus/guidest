import { registerAs } from '@nestjs/config';
export default registerAs('app', () => ({
    appEnv: process.env.APP_ENV,
    appPort: process.env.APP_PORT || 3000,
    appHost: process.env.APP_HOST,
    appUrl: `${process.env.APP_HOST}:${process.env.APP_PORT}`
}));