import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: { type: String, required: true, },
  email: { type: String, required: true, unique: true, min: 2, max: 60, },
  password: { type: String, required: true, },
}, {
  versionKey: false,
  timestamps: true,
});

// Metodo para comprar senhas
userSchema.methods.comparePassword = function (password) {
  return this.password === password;
};

const User = mongoose.model("User", userSchema);

export default User;