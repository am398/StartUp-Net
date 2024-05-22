const express = require('express');
const { createStartup, getStartups, getStartup, updateStartup, deleteStartup } = require('../controllers/startupController');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

router.post('/', authMiddleware, createStartup);
router.get('/', getStartups);
router.get('/:id', getStartup);
router.put('/:id', authMiddleware, updateStartup);
router.delete('/:id', authMiddleware, deleteStartup);

module.exports = router;
