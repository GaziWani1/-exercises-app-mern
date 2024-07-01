import { Router } from 'express';
import { login, signIn } from '../controllers/user.controller.js';

const route = Router();

route.post('/signin', signIn);
route.post('/login', login);

export default route;
