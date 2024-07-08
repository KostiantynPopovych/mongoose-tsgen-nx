import { model, models, Schema } from 'mongoose';
import { defaultOptions } from '@repo/utils/config';

const User = new Schema(
  {
    email: {
      type: String,
      trim: true,
      unique: true,
      required: true,
    },
  },
  defaultOptions,
);

export default (models.User || model("User", User));

