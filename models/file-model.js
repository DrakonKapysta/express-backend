const { Schema, model } = require("mongoose");

const UserSchema = new Schema({
  name: { type: String, required: true },
  type: { type: String, required: true },
  accessLink: { type: String },
  size: { type: Number, default: 0 },
  path: { type: String, default: "" },
  date: { type: Date, default: Date.now() },
  user: { type: Schema.Types.ObjectId, ref: "User" },
  parent: { type: Schema.Types.ObjectId, ref: "File" },
  childs: [{ type: Schema.Types.ObjectId, ref: "File" }],
});

module.exports = model("File", UserSchema);
