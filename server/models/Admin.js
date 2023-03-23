import mongoose from "mongoose";
import bcrypt from "bcrypt";

const adminSchema = new mongoose.Schema(
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
    isAdmin: {
      type: Boolean,
      default: true,
    },
    verified: {
      type: Boolean,
      default: false,
    },
    /** username: {
      type: String,
      required: [true, "UserName is Required!"],
      unique: [true, "UserName must be unique!"],
    }, */
  },
  { timestamps: true }
);

adminSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 15);
  return next();
});

adminSchema.methods.comparePwd = async function (password) {
  return await bcrypt.compare(password, this.password);
};

const Admin = mongoose.model("Admin", adminSchema);

export default Admin;
