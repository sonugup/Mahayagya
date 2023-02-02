const mongoose = require("mongoose");

// its an module structures
const userSchema = mongoose.Schema(
  {
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    mobile: { type: String, required: true },
    role: { type: String, default: "user", enum: ["user", "admin"] },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const userModel = mongoose.model("users", userSchema);
module.exports = { userModel };
