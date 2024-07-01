import dotenv from 'dotenv';
import connectDb from './db/connectDb.js';
import { app } from './app.js';
dotenv.config();
connectDb()
  .then(() => {
    app.listen(process.env.PORT || 5000, () => {
      console.log(`app is runing on PORT ${process.env.PORT || 5000}`);
    });
  })
  .catch((err) => {
    console.log('Mongo db connection failed', err);
  });
