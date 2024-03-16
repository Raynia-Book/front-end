import express, { json, urlencoded } from 'express';
import routing from './routers/routing';
import config from './config';
import path from 'path';

async function main(): Promise<void> {
    const app = express();
    const port = config.app.port;
    const host = config.app.host;

    app.use(express.static(path.join(process.cwd(), 'public')))

    app.use('/', routing);

    app.listen(port, () => console.log(`Server is running on port ${port}`))
}
main()