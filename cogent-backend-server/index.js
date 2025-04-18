const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes');
const db = require('./db'); // Import the database connection

const app = express();
const PORT = 5000;

// Middlewares
app.use(cors()); // Allow requests from frontend
app.use(bodyParser.json());
app.use('/api/users', userRoutes);

app.listen(PORT, () => {
  console.log(`Backend server running on http://localhost:${PORT}`);
});
