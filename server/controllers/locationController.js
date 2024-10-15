// controllers/locationController.js
const Location = require('../models/Location');

exports.getAllLocations = async (req, res) => {
    try {
        const locations = await Location.find();
        res.json(locations);
        console.log('locations', locations);
    } catch (err) {
        res.status(500).send(err);
    }
};

exports.getLocationById = async (req, res) => {
    try {
        const location = await Location.findOne({ id: req.params.id });
        if (!location) return res.status(404).send("Location not found");
        res.json(location);
    } catch (err) {
        res.status(500).send(err);
    }
};
