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

// Start the Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
