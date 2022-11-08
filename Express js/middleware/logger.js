const moment = require("moment");

//creating middelware
const logger = (req, res, next) => {
  console.log(
    `${req.protocl}://${req.get("host")}${
      req.originalUrl
    }: ${moment().format()}`
  );
  next();
};

module.exports = logger;
