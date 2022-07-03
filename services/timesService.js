const Times = require("../models/Bussinestimes");

const getAll = async () => {
  return Times.find({}).then((timesData) => {
    return timesData;
  });
};

const uptadeTime = async (id, newValueOBJ) => {
  if (!id) throw { message: "No Post ID.", status: 404 };

  const filter = { _id: id };
  const updatedItem = Object.keys(newValueOBJ)[0];

  return Times.findOneAndUpdate(filter, newValueOBJ, { new: true }).then(
    (newValue) => {
      return newValue[updatedItem];
    }
  );
};

const uptadeClosed = async (id, newValueOBJ) => {
  if (!id) throw { message: "No Post ID.", status: 404 };

  const filter = { _id: id };
  const day = newValueOBJ.day;
  const value = newValueOBJ.value;

  const closedUpdate = { $set: {} };
  closedUpdate["$set"][`${day}.2`] = newValueOBJ.value;

  Times.updateOne({ filter }, closedUpdate, (err, results) => {
    if(!err) return err;
    return results;
  })
};

module.exports = {
  getAll,
  uptadeTime,
  uptadeClosed,
};
