import express, { Router } from 'express';
import itemController from './controllers/itemController';

const router: Router = express.Router();
router.use('/items', itemController)

export default router;