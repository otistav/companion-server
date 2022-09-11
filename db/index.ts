import mongoose from 'mongoose';

export default async function () {
  await mongoose.connect(`mongodb://${process.env.MONGO_HOST}:${process.env.MONGO_PORT}`);
}
