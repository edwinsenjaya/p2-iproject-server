const { Op } = require("sequelize");

const filterData = function (requestQuery) {
  let { filter, sort } = requestQuery;
  let paramQuerySQL = {};

  // filtering
  if (filter != "" && typeof filter !== "undefined") {
    paramQuerySQL.where = {};

    // name
    if (filter.name != "" && typeof filter.name !== "undefined") {
      let query = filter.name.split(",").map(function (item) {
        return {
          [Op.iLike]: "%" + item + "%",
        };
      });
      paramQuerySQL.where.name = { [Op.or]: query };
    }
  }

  // sorting
  if (sort != "" && typeof sort !== "undefined") {
    let query = sort.split(",");
    query = query.map(function (item) {
      if (item.charAt(0) !== "-") {
        return [[item, "ASC"]];
      } else {
        return [[item.replace("-", ""), "DESC"]];
      }
    });

    paramQuerySQL.order = query;
  }

  return paramQuerySQL;
};

module.exports = filterData;
