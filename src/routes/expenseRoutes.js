
const router = require('express').Router();
const c = require('../controllers/expenseController');
const auth = require('../middleware/auth');

router.get('/', auth, c.getExpenses);
router.post('/', auth, c.addExpense);
router.put('/:id', auth, c.updateExpense);
router.delete('/:id', auth, c.deleteExpense);

module.exports = router;
