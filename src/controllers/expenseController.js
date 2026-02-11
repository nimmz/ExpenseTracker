
const Expense = require('../models/Expense');

exports.getExpenses = async (req, res) => {
  const data = await Expense.find({ userId: req.user.id });
  res.json(data);
};

exports.addExpense = async (req, res) => {
  const exp = await Expense.create({ ...req.body, userId: req.user.id });
  res.json(exp);
};

exports.updateExpense = async (req, res) => {
  const exp = await Expense.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(exp);
};

exports.deleteExpense = async (req, res) => {
  await Expense.findByIdAndDelete(req.params.id);
  res.json({ message: 'Deleted' });
};
