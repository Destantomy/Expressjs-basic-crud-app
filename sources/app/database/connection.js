const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    // mongodb connection string
    const connect = await mongoose.connect(process.env.mongo_uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`MongoDB connected on: ${connect.connection.host}`);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

module.exports = connectDB;
