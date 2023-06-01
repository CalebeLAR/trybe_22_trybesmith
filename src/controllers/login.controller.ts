import { Request, Response } from 'express';
import { LoginUser } from 'src/types/Login';
import loginService from '../services/login.service';
import mapStatusHTTP from '../utils/mapStatusHTTP';

const login = async (req:Request, res:Response) => {
  const loginUser = req.body as LoginUser;

  const { status, data } = await loginService.login(loginUser);
  if (status !== 'SUCCESSFUL') return res.status(mapStatusHTTP(status)).json(data);

  return res.status(200).json(data);
};

export default {
  login,
};