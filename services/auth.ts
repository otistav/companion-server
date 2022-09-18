import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { v4 } from 'uuid';
import User, { BaseUser } from '../db/models/User';
import RefreshToken from '../db/models/Token';
import AuthError from '../errors/AuthError';

export const registerUser = async (username: string, email: string, password: string) => {
  const oldUser = await User.findOne({ $or: [{ username }, { email }] });
  if (oldUser) {
    throw new AuthError();
  }
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = new User({ username, email, password: hashedPassword });
  await user.save();
  return user;
};

export const generateTokens = async (user: BaseUser) => {
  const accessToken = jwt.sign(
    {
      user,
    },
    process.env.SECRET as string,
    {
      expiresIn: 60 * 5,
    },
  );

  const refreshToken = v4();
  const token = new RefreshToken({ token: refreshToken, userId: user.id });
  await token.save();

  return { accessToken, refreshToken };
};
