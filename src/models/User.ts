import mongoose, { Document, Schema } from "mongoose";

export type User = Document & {
  email: string;
  socketId: string;
  name: string;
  avatar: string;
};

const UserSchema = new Schema({
  email: String,
  socketId: String,
  name: String,
  avatar: String
});

const UserModel = mongoose.model<User>("User", UserSchema);

export { UserModel }