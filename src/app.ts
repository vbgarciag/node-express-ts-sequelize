import express, { Application, Request, Response } from "express";
import { sequelize } from "./database";

export default class App {
    private app: Application;

    constructor(private readonly port?: number) {
        this.app = express();
        this.config();
        this.databaseInit();
        this.middlewares();
        this.routes();
    }

    config() {
        this.app.set('port', this.port || process.env.PORT || 3000);
    }

    databaseInit() {
        sequelize.authenticate()
            .then(() => {
                sequelize.sync()
                    .then(() => console.log('database connected!'))
                    .catch(error => console.log(error));
            })
            .catch(error => console.log(error));
    }

    middlewares() {
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: false }));
    }

    routes() {
        this.app.use('/', (req: Request, res: Response) => {
            res.send('Welcome to my API!');
        });
    }

    listen() {
        this.app.listen(this.app.get('port'), () => {
            console.log(`Server running on port ${this.app.get('port')}`);
        });
    }
}