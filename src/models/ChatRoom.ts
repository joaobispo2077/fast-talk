import mongoose, { Document, Schema } from "mongoose";
import { User } from "./User";
import crypto from "crypto";

export type ChatRoom = Document & {
  chatRoomId: string,
  usersId: string[],
};

export const ChatRoomSchema = new Schema({
  chatRoomId: {
    type: String,
    default: () => crypto.randomUUID(),
  },
  usersId: [{
    type: Schema.Types.ObjectId,
    ref: "Users",
  }],
});

export const ChatRoomModel = mongoose.model<ChatRoom>("ChatRooms", ChatRoomSchema);