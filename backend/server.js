const express = require('express');
const dotenv = require('dotenv')
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const postRoutes = require('./routes/posts');
const categoryRoutes = require('./routes/categories');
const cors = require('cors');

const app = express();

dotenv.config()

const PORT = process.env.PORT || 8000;

// Middleware
// app.use(bodyParser.json());
app.use(cors());
app.use(express.json())

// Connect to MongoDB
// mongoose.connect('mongodb://localhost:27017/blog')
mongoose.connect(process.env.MONGODB_URI)
.then(() => console.log('MongoDB Connected'))
.catch(err => console.log('DB error',err));

// Use routes
app.use('/api/posts', postRoutes);
app.use('/api/categories', categoryRoutes);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`))