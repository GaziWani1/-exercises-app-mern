import { Router } from 'express';
import { addExersice } from '../controllers/exersices.controller.js';
import { protect } from '../middleware/authMiddleware.js';
import upload from '../middleware/cloudinary.js';

const route = Router();

route.post('/addExersices', protect, upload.array('images', 3), addExersice);

export default route;
