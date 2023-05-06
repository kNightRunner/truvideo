import mongoose, { Document, Schema } from 'mongoose';

export interface IUser extends Document {
  firstName: string;
  lastName: string;
  address: string;
  profileImage: string;
  username: string;
  password: string;
}

const UserSchema: Schema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  address: { type: String, required: true },
  profileImage: { type: String, required: true },
  username: { type: String, required: true },
  password: { type: String, required: true },
});
export default mongoose.model<IUser>('User', UserSchema);
