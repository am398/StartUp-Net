const express = require('express');
const { createResource, getResources, getResource, updateResource, deleteResource } = require('../controllers/resourceController');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

router.post('/', authMiddleware, createResource);
router.get('/', getResources);
router.get('/:id', getResource);
router.put('/:id', authMiddleware, updateResource);
router.delete('/:id', authMiddleware, deleteResource);

module.exports = router;
