const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
    name: String,
    quantity: Number,
    category: String,
    price: Number,
    status: String,
    godown_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Location',
    },
    brand: String,
    attributes: Object,
    image_url: String
});

module.exports = mongoose.model('Item', itemSchema);
