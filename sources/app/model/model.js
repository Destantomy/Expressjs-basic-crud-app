const mongoose = require('mongoose');

const scheme = new mongoose.Schema({
  f_name: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
});

const userDB = mongoose.model('userdb', scheme);

module.exports = userDB;
