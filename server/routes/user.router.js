import { Router } from 'express';
import {
  addExercisesToUser,
  login,
  signIn,
} from '../controllers/user.controller.js';
import { protect } from '../middleware/authMiddleware.js';

const route = Router();

route.post('/signin', signIn);
route.post('/login', login);
route.post('/addExersicesToUser', protect, addExercisesToUser);

export default route;
