const express = require('express');
const passport = require('passport');

require('./services/passport');

const app = express();

app.use(passport.initialize());

require('./routes/authRoutes')(app);

const PORT = process.env.PORT || 5000;

app.listen(PORT);