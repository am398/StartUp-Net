const express = require('express');
const { createInvestment, getInvestments, getInvestment, updateInvestment, deleteInvestment } = require('../controllers/investmentController');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

router.post('/', authMiddleware, createInvestment);
router.get('/', getInvestments);
router.get('/:id', getInvestment);
router.put('/:id', authMiddleware, updateInvestment);
router.delete('/:id', authMiddleware, deleteInvestment);

module.exports = router;
