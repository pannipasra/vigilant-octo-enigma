import express, { application } from 'express'
import cookieParser from 'cookie-parser'

import passportCustom from './libs/security'
import userRouter from './routes/user.route'
import meowRouter from './routes/meow.route'

// 1 setting express
const app = express();

// 2 setting express middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(passportCustom.initialize()); // -- initialize passport(custom) --

// 3 utilize routers
app.use('/api/auth', userRouter);
app.use('/api/meow', meowRouter);

// export app
export default app;