import { Item } from '../models/item';
import { v4 as uuidv4 } from 'uuid';

const items: Item[] = [];

export const getItems = () => {
    return items;
};

export const getItem = (id: string) => {
    if (!id) {
        throw new Error('Id is required!');
    }

    const item = items.find(item => item.id === id);

    if (!item) {
        throw new Error('Item not found!');
    }
    return item;
};

export const addItem = (name: string) => {
    if (!name) {
        throw new Error('Name is required!');
    }

    const newItem: Item = { id: uuidv4(), name };
    items.push(newItem);
    return newItem;
};

export const editItem = (id: string, name: string) => {
    if (!name) {
        throw new Error('Name is required!');
    }

    if (!id) {
        throw new Error('Id is required!');
    }

    const item = items.find(item => item.id === id);
    if (!item) {
        throw new Error('Item not found!');
    }

    item.name = name;
    return item;
};

export const deleteItem = (id: string) => {
    const index = items.findIndex(item => item.id === id);
    if (index === -1) {
        throw new Error('Item not found!');
    }

    items.splice(index, 1)[0];
    
    return 'Item successfully deleted!';
};
