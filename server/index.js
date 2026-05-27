const express = require('express');
const passport = require('passport');
const mongoose = require('mongoose');
const keys = require('./config/keys');

require('./models/user');
require('./services/passport');
mongoose.connect(keys.mongoURI)
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

const app = express();
app.use(passport.initialize());

require('./routes/authRoutes')(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);