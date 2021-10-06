import mongoose from "mongoose";
import mongooseUniqueValidator from "mongoose-unique-validator";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  passwordHash: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
});

userSchema.plugin(mongooseUniqueValidator);

const User = mongoose.model("User", userSchema);
export default User;
