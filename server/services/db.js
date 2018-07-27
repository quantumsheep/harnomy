
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/harnomy', { useNewUrlParser: true }).then(() => {
    console.log("MongoDB server successfully connected");
}).catch(reason => {
    throw reason;
});

module.exports = mongoose;