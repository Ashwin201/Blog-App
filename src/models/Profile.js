import mongoose from "mongoose";

const { Schema } = mongoose;

const profileSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required."],
    },
    email: {
      type: String,
      unique: [true, "Email already exists."],
      required: [true, "Email is required."],
    },
    password: {
      type: String,
      unique: false,
      required: [true, "Password is required."],
    },
  },
  { timestamps: true }
);

//If the Profile collection does not exist create a new one.
export default mongoose.models.Profile ||
  mongoose.model("Profile", profileSchema);
