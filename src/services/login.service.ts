import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { LoginUser, LoginToken } from 'src/types/Login';
import { ServiceResponse } from 'src/types/serviceResponse';
import UserModel from '../database/models/user.model';

const JWT_SECRET = process.env.JWT_SECRET || 'JWT_SECRET';

const login = async (logUser:LoginUser):Promise<ServiceResponse<LoginToken>> => {
  const { username, password } = logUser;

  if (!password || !username) {
    return { status: 'INVALID_DATA', data: { message: '"username" and "password" are required' } };
  }

  const user = await UserModel.findOne({
    where: { username },
  });

  if (!user || !bcryptjs.compareSync(password, user.dataValues.password)) {
    return { status: 'UNAUTHORIZED', data: { message: 'user not found' } };
  }

  const payload = { id: user?.dataValues, username };
  const token = jwt.sign(payload, JWT_SECRET, { algorithm: 'HS256', expiresIn: '1h' });

  return { status: 'SUCCESSFUL', data: { token } };
};

export default {
  login,
};