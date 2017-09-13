const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const app = express();

const mongoose = require('mongoose');

//db  and name is auth
mongoose.connect('mongodb://localhost:auth/auth')

// app setup
app.use(morgan('combined'));
app.use(bodyParser.json({ type: '*/*' }));
//server setup
const port = process.env.Port || 4000
const server = http.createServer(app);
app.listen(port);
console.log(`Sever listening on ${port}`)

const authRoutes = require('./routes/auth_routes');
app.use('/',authRoutes);
