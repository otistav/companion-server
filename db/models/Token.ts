import { Schema, model } from 'mongoose';

export interface Token {
  token: string;
  userId: string;
}

const userTokenSchema = new Schema<Token>({
  token: String,
  userId: String,
});

export default model<Token>('RefreshToken', userTokenSchema);
