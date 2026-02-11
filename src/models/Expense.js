
const mongoose = require('mongoose');

const expenseSchema = new mongoose.Schema({
  title: String,
  amount: Number,
  userId: mongoose.Schema.Types.ObjectId
});

module.exports = mongoose.model('Expense', expenseSchema);
