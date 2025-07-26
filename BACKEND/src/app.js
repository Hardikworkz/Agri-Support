// SERVER CREATED
const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');

//ROUTES
const aiRoutes = require('./routes/ai.routes');
const cropRoutes = require("./routes/crop.route");
const mandiRoutes = require('./routes/mandi.route');
const weatherRoutes = require('./routes/weather.route');
const cropNewsRoutes = require("./routes/cropNews.route");
const userRoutes = require('./routes/userRoutes');


app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send('Server is running!');
});

app.use('/ai', aiRoutes);
app.use('/api/weather',weatherRoutes );
app.use("/api/crops", cropRoutes);
app.use("/api/mandi", mandiRoutes);
app.use("/api/market-news", cropNewsRoutes);
app.use('/api/users', userRoutes);

mongoose.connect('mongodb://localhost:27017/auth-user', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('MongoDB connected');
});


module.exports = app;