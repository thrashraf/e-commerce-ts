import express from 'express';
import { loginUser, updateAddress, updateUserInformation } from '../controller/usersController.js';
import { signupUser } from '../controller/usersController.js';
import { refreshToken } from '../controller/refreshToken.js';

const userRoute = express.Router();

userRoute.post('/signup', signupUser);
userRoute.post('/login', loginUser);
userRoute.get('/refresh', refreshToken);
userRoute.post('/updateUser', updateUserInformation);
userRoute.post('/addAddress', updateAddress);

export default userRoute
