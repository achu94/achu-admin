const General = require("../models/General");

const getAll = async () => {
  return General.find({}).then((generalData) => {
    return generalData;
  });
};

const uptadeItem = async (id, newValueOBJ) => {

  if(!id) throw {message: 'No Post ID.', status: 404};

  const filter = {_id: id};
  const updatedItem = Object.keys(newValueOBJ)[0];

  return General.findOneAndUpdate(filter, newValueOBJ, { new:true }).then( (newValue) => {
    return newValue[updatedItem];
  });
}

module.exports = {
  getAll,
  uptadeItem
};
