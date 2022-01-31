import express from 'express';
import { loginUser } from '../controller/usersController.js';
import { signupUser } from '../controller/usersController.js';

const userRoute = express.Router();

userRoute.post('/signup', signupUser);
userRoute.post('/login', loginUser);

export default userRoute
