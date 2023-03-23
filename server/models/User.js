import mongoose from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: [true, "Email Required"],
      unique: [true, "Email must be Unique"],
    },
    password: {
      type: String,
      required: [true, "Password Required"],
    },
    name: {
      type: String,
      required: [true, "Name Required"],
    },
    verified: {
      type: Boolean,
      default: false,
    },
    dob: {
      type: String,
      required: [true, "Invalid DOB"],
    },
    place: {
      type: String,
      required: [true, "Place is Required!"],
    },
    lang: {
      type: String,
      required: [true, "Language is Required!"],
    },
    username: {
      type: String,
      required: [true, "UserName is Required!"],
      unique: [true, "UserName must be unique!"],
    },
    image_url: {
      type: String,
      default: null,
    },
    mobile: {
      type: Number,
      default: null,
    },
  },
  { timestamps: true }
);

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 15);
  return next();
});

userSchema.methods.comparePwd = async function (password) {
  return await bcrypt.compare(password, this.password);
};

const User = mongoose.model("User", userSchema);

export default User;
