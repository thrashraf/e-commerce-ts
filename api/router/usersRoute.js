import express from 'express';
import { loginUser, updateUserInformation } from '../controller/usersController.js';
import { signupUser } from '../controller/usersController.js';
import { refreshToken } from '../controller/refreshToken.js';

const userRoute = express.Router();

userRoute.post('/signup', signupUser);
userRoute.post('/login', loginUser);
userRoute.get('/refresh', refreshToken);
userRoute.post('/updateUser', updateUserInformation);

export default userRoute
