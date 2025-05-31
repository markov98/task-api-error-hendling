import express, { Router } from 'express';
import * as itemService from '../services/itemService';

const router: Router = express.Router();

// Get all items
router.get('/', (req, res) => {
    res.status(200).json(itemService.getItems());
});

// Get a single item by id
router.get('/:id', (req, res) => {
    try {
        const item = itemService.getItem(req.params.id);
        res.status(200).json(item);
    } catch (err) {
        res.status(404).json(
            err instanceof Error
                ? { error: err.message }
                : { error: 'An unknown error occurred.' }
        );
    }
});

// Add new item
router.post('/', (req, res) => {
    try {
        res.status(201).json(itemService.addItem(req.body.name));
    } catch (err) {
        res.status(400).json(
            err instanceof Error
                ? { error: err.message }
                : { error: 'An unknown error occurred.' }
        );
    }
});

// Edit an item by id
router.put('/:id', (req, res) => {
    try {
        res.status(200).json(itemService.editItem(req.params.id, req.body.name));
    } catch (err) {
        res.status(400).json(
            err instanceof Error
                ? { error: err.message }
                : { error: 'An unknown error occurred.' }
        );
    }
});

// Delete an item by id
router.delete('/:id', (req, res) => {
    try {
        res.status(200).json(itemService.deleteItem(req.params.id));
    } catch (err) {
        res.status(404).json(
            err instanceof Error
                ? { error: err.message }
                : { error: 'An unknown error occurred.' }
        );
    }
});

export default router;