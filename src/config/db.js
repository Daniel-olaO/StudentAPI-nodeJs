const mongoose = require('mongoose');


const options = {
  keepAlive: true,
  connectTimeoutMS: 30000,
  socketTimeoutMS: 0,
  useNewUrlParser: true,
  // useCreateIndex: true,
  useUnifiedTopology: true,
};

const db = mongoose.createConnection(process.env.DB_CONNECTION_URL, options);

// db.then((conn) => {
//   console.info(
//     `MongoDB connected successfully to ${conn.host}:${conn.port}/${conn.db.databaseName}`,
//   );
// });

db.on('connected', () => {
  console.info('db connected');
});

module.exports = db;