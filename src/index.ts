import express, {Express} from 'express';
import router from './router';

const app: Express = express();
const PORT: Number = 3000;

app.use(express.json());
app.use(router);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});