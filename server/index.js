require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');

// Connect to MongoDBconnectDB();
connectDB();

// Import Routes
const locationRoutes = require('./routes/locations');
const itemRoutes = require('./routes/items');

// Initialize Express App
const app = express();
app.use(cors());
app.use(express.json());

// Use Routes
app.use('/locations', locationRoutes);
app.use('/items', itemRoutes);

app.get('/', (req, res) => {
    res.json({
        message: "Welcome to the Warehouse APIs! Below is a summary of available routes:",
        routes: {
            "/": "Displays this glossary of routes.",
            "/locations": {
                GET: "Returns a list of all locations."
            },
            "/items": {
                GET: "Returns a list of all items."
            },
            "/by-godown/:godown_id": {
                GET: "Returns details of items in the specified godown.",
            }
        }
    });
});

// Start the Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
