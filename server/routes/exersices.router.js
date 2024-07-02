import { Router } from 'express';

import { protect } from '../middleware/authMiddleware.js';
import {
  addExercise,
  getExercises,
} from '../controllers/exersices.controller.js';

const route = Router();

route.post('/addExersices', protect, addExercise);
route.get('/getExersices', protect, getExercises);

export default route;
