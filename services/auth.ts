import bcrypt from 'bcrypt';
import User from '../db/models/User';
import AuthError from '../errors/AuthError';

export const register = async (username: string, email: string, password: string) => {
  const oldUser = await User.findOne({ $or: [{ username }, { email }] });
  if (oldUser) {
    throw new AuthError();
  }
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = new User({ username, email, password: hashedPassword });
  await user.save();
  return user;
};

export const generateTokens = async (user: User) => {

};
