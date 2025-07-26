const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const userRoutes = require('../routes/userRoutes');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/auth-user/auth-user', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log("MongoDB connected"));

app.use('/api/users', userRoutes);

app.listen(3000, () => console.log('Server running on http://localhost:3000'));
