import express from 'express';
import loginController from '../controllers/login.controller';

const loginRoute = express.Router();

loginRoute.post('/login', loginController.login);

export default loginRoute;