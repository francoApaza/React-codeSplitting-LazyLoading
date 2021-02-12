const mongoose = require('mongoose');

function mongoConnection() {
    mongoose.connect("mongodb://localhost/fseletro",
        { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("MongoDB conectado!");
    })
    .catch((error) => {
        console.log(error)
    })
}

module.exports = mongoConnection();
