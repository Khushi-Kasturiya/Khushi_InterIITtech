const mongoose = require('mongoose');

const locationSchema = new mongoose.Schema({
    name: String,
    parent_godown: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Location',
    }
});

module.exports = mongoose.model('Location', locationSchema);
