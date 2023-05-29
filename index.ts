import express from 'express';
import dotenv from 'dotenv';
dotenv.config();

// Create an instance of the Express application and define the port
const app = express();
const port = process.env.PORT || 3000;

// Routes
app.listen(port, () => console.log(`API running on port ${port}`));
app.get('/', (req, res) => res.json('API is running 🌺'));

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
