import { Schema, model } from 'mongoose';

export interface UserAttributes {
  email: string;
  username: string;
  password: string;
  avatar?: string;

}

const userSchema = new Schema<UserAttributes>({
  email: { type: String, required: true },
  username: { type: String, required: true },
  password: { type: String, required: true },
  avatar: String,
});

export default model<UserAttributes>('User', userSchema);
