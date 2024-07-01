import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';

const app = express();

app.use(express.json({ limit: '16kb' }));
app.use(express.urlencoded({ extended: true, limit: '16kb' }));
app.use(express.static('public'));
app.use(cookieParser());

app.use(cors());

import userRoute from './routes/user.router.js';
import exersiceRoute from './routes/exersices.router.js';

app.use('/api/user', userRoute);
app.use('/api/exersices', exersiceRoute);

export { app };
