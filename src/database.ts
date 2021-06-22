import { Sequelize } from 'sequelize-typescript';

const DB_SCHEMA: string = process.env.DB_SCHEMA || 'dependency';
const DB_USER: string = process.env.DB_USER || 'root';
const DB_PASSWORD: string = process.env.DB_PASSWORD || 'password';
const DB_HOST: string = process.env.DB_HOST || 'localhost';

export const sequelize = new Sequelize(DB_SCHEMA, DB_USER, DB_PASSWORD, {
    host: DB_HOST,
    dialect: 'mysql',
    models: [__dirname + '/models'],
    logging: false
})