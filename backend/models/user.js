const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true, required: true },
  password: String,
  phone: String,
  role: { type: String, enum: ['user', 'admin'], default: 'user' },
  address: String,
  vouchers: [{ type: String }],
}, { timestamps: true })

module.exports = mongoose.model('User', userSchema);
