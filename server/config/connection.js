const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost')

module.exports = mongoose.connection;
