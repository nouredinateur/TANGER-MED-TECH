require('dotenv').config()
require('../db/db');

const express = require('express');
const rateLimit = require('express-rate-limit');

const User = require('./model/User')
const app = express();
const port = 1337;
const cors = require('cors');

const userRoutes = require('./routes/userRoutes');
const truckRoutes = require('./routes/truckRoutes');
const categoryRoutes = require('./routes/categoryRoutes');
const portRoutes = require('./routes/portRoutes');
const containerRoutes = require('./routes/containerRoutes');
const wareHouseRoutes = require('./routes/warehouseRoutes');
const blockRoutes = require('./routes/blockRoutes');
const yardRoutes = require('./routes/yardRoutes');
const shipRoutes = require('./routes/shipRoutes');

app.use(cors())

app.use(express.json())

const limiter = rateLimit({
    max: 150,
    windowMs: 60 * 60 * 1000,
    message: 'Too Many Request from this IP, please try again in an hour'
});

app.use('/api', limiter);

app.use('/api/v1/user', userRoutes);
app.use('/api/v1/truck', truckRoutes);
app.use('/api/v1/category', categoryRoutes);
app.use('/api/v1/port', portRoutes);
app.use('/api/v1/container', containerRoutes);
app.use('/api/v1/warehouse', wareHouseRoutes);
app.use('/api/v1/block/', blockRoutes);
app.use('/api/v1/yard/', yardRoutes);
app.use('/api/v1/ship', shipRoutes);

app.get('/user', (req, res) => {
    res.send('from user service')
})

app.listen(port, () => {
    console.log(`Up and Running on port ${port}`);
})