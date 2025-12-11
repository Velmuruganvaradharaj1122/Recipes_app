const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const recipeRoutes = require('./routes/recipeRoutes');

dotenv.config();
const app = express();

// Middleware to parse JSON
app.use(express.json());

// Connect Database
connectDB();

// Routes
app.use('/api/recipes', recipeRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));