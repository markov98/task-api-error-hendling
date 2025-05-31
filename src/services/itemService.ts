import { Item } from '../models/item';
import { v4 as uuidv4 } from 'uuid';

const items: Item[] = [];

export const getItems = () => {
    return items;
}

export const addItem = (name: string) => {
    if (!name) {
        throw new Error('Name is required!')
    }

    const newItem: Item = { id: uuidv4(), name };
    items.push(newItem);
    return newItem;
}