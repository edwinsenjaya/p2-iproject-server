"use strict";
const { transTag } = require("../seedData/seed");
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("TransTags", transTag);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("TransTags", null, {});
  },
};
