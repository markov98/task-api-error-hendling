import express, { Router } from 'express';
import { Item } from '../models/item';
import { v4 as uuidv4 } from 'uuid';

const router: Router = express.Router();
const items: Item[] = [];

// Routes
router.get('/', (req, res) => {
    res.status(200).json(items);
});

router.post('/', (req, res) => {
    const { name } = req.body;
    if (!name) {
        res.status(400).json({ message: 'Name is required' });
    } else {
        const newItem: Item = { id: uuidv4(), name };
        items.push(newItem);
        res.status(201).json(newItem);
    }
});

export default router;