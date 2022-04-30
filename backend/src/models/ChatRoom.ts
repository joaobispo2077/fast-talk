import mongoose, { Document, Schema } from 'mongoose';

import crypto from 'crypto';

export type ChatRoom = Document & {
  chatRoomId: string;
  usersId: string[];
};

export const ChatRoomSchema = new Schema({
  name: {
    type: String,
  },
  chatRoomId: {
    type: String,
    default: () => crypto.randomUUID(),
  },
  usersId: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Users',
    },
  ],
  expirationInDays: {
    type: Number,
  },
});

export const ChatRoomModel = mongoose.model<ChatRoom>(
  'ChatRooms',
  ChatRoomSchema,
);
