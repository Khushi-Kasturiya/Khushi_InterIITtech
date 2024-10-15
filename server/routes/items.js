// routes/items.js
const express = require('express');
const router = express.Router();
const {
    getAllItems,
    getItemsByGodownId,
    addItem,
    updateItem,
    deleteItem
} = require('../controllers/itemController');

router.get('/', getAllItems);
router.get('/by-godown/:godown_id', getItemsByGodownId);
router.post('/', addItem);
router.put('/:item_id', updateItem);
router.delete('/:item_id', deleteItem);

module.exports = router;
