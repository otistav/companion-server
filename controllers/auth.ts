import { Request, Response, NextFunction } from 'express';
import User from '../db/models/User';
import { register } from '../services/auth';

export const index = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const user = await User.findOne({ username: 'ff' });
    console.log(user, 'user');
    res.send(user);
  } catch (err) {
    next(err);
  }
};

export const login = (req: Request, res: Response, next: NextFunction) => {
  res.send('request here');
};

export const register = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const user = await register(req.body.username, req.body.email, req.body.password);
    // const { accessToken, refreshToken } = await authService.generateTokens(user);
    // res.set(process.env.ACCESS_HEADER as string, accessToken);
    // res.set(process.env.REFRESH_HEADER as string, refreshToken);
    res.send(user);
  } catch (error) {
    next(error);
  }
};
