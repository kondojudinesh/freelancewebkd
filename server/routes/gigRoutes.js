import express from 'express';
import { createGig, getAllGigs } from '../controllers/gigController.js';

const router = express.Router();

router.post('/', createGig);
router.get('/', getAllGigs);

export default router;

