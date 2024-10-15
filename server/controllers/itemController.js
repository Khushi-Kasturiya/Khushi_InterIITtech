// controllers/itemController.js
const Item = require('../models/Item');

exports.getAllItems = async (req, res) => {
    try {
        const items = await Item.find();
        res.json(items);
    } catch (err) {
        res.status(500).send(err);
    }
};

exports.getItemsByGodownId = async (req, res) => {
    try {
        const items = await Item.find({ godown_id: req.params.godown_id });
        res.json(items);
    } catch (err) {
        res.status(500).send(err);
    }
};

exports.addItem = async (req, res) => {
    try {
        const newItem = new Item(req.body);
        await newItem.save();
        res.status(201).send(newItem);
    } catch (err) {
        res.status(400).send(err);
    }
};

exports.updateItem = async (req, res) => {
    try {
        const updatedItem = await Item.findOneAndUpdate(
            { item_id: req.params.item_id },
            req.body,
            { new: true }
        );
        if (!updatedItem) return res.status(404).send("Item not found");
        res.json(updatedItem);
    } catch (err) {
        res.status(400).send(err);
    }
};

exports.deleteItem = async (req, res) => {
    try {
        const deletedItem = await Item.findOneAndDelete({ item_id: req.params.item_id });
        if (!deletedItem) return res.status(404).send("Item not found");
        res.json(deletedItem);
    } catch (err) {
        res.status(500).send(err);
    }
};
