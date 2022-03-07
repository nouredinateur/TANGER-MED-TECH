const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO).then(() => {
     console.log('Connection successful!');
}).catch((e) => {
     console.log('Connection failed!');
})