import { Schema, model } from 'mongoose';

export interface BaseUser {
  id: string;
  email: string;
  username: string;
  password: string;
  avatar?: string;

}

const userSchema = new Schema<BaseUser>({
  email: { type: String, required: true },
  username: { type: String, required: true },
  password: { type: String, required: true },
  avatar: String,
});

export default model<BaseUser>('User', userSchema);
