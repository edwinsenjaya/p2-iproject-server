"use strict";
const { tags } = require("../seedData/seed");
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("Tags", tags);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Tags", null, {});
  },
};
