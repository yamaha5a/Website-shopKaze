const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
  name: { type: String, required: true },
  parentId: { type: mongoose.Schema.Types.ObjectId, ref: 'Category', default: null },
}, { timestamps: { createdAt: true, updatedAt: false } });

module.exports = mongoose.model('Category', categorySchema);
