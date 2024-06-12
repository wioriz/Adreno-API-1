const { errorHandler } = require("../utils");

exports.home = async (req, res, next) => {
  res.json({"Authors":"Đây là web APIs của Wioriz","APIs":"/loli /wallpaper /nino/[get/add]"});
};
