import express, { Router } from 'express';
import * as itemService from '../services/itemService';

const router: Router = express.Router();

// Routes
router.get('/', (req, res) => {
    res.status(200).json(itemService.getItems());
});

router.post('/', (req, res) => {
    try {
        res.status(201).json(itemService.addItem(req.body.name));
    } catch (err) {
        res.status(400).json(err instanceof Error ?
                {'error': err.message} : {'error': 'An unknown error occured.'}
        )
    }
});

export default router;