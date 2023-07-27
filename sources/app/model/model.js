const mongoose = require('mongoose');

const scheme = new mongoose.Schema({
  series: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
    unique: true,
  },
  status: {
    type: String,
    required: false,
  },
});

const userDB = mongoose.model('crud_dms', scheme);

module.exports = userDB;
