const General = require("../models/General");

const getAll = async () => {
  return General.find({}).then((generalData) => {
    return generalData;
  });
};

module.exports = {
  getAll,
};
