import express, {Express} from 'express';
import router from './items/items';

const app: Express = express();
const PORT: Number = 3000;

app.use(express.json());
app.use('/items', router);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});