import express from 'express';
import { loginUser } from '../controller/usersController.js';
import { signupUser } from '../controller/usersController.js';
import { middleware } from '../controller/middleware.js';

const userRoute = express.Router();

userRoute.post('/signup', signupUser);
userRoute.post('/login', loginUser);
userRoute.get('/user', middleware);

export default userRoute
