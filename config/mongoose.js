const mongoose = require("mongoose");
const { DB_URI } = require("./config");

let db;

const dbOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}

const connect = async () => {
  try {
    mongoose.connect(DB_URI + 'Login');
    db = mongoose.connection;
    console.log("MongoDB connected!!");
  } catch (err) {
    console.log("Failed to connect to MongoDB", err);
  }
};

const db_switch = async (db_name = 'Login') => {
  if (!db) await connect();

  if(db_name === db.name) return;

  try {
    await mongoose.disconnect();
    await mongoose.connect(DB_URI + db_name, dbOptions);
    db = mongoose.connection;

    console.log(`MongoDB switched to: ${db_name}`);
  } catch (err) {
    console.log(`MongoDB failed to switch ${db_name}`, err);
  }

  return db;
};

module.exports = {
  connect,
  db_switch,
  db,
};
