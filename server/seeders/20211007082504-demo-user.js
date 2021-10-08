'use strict';
require('dotenv').config();
const bcrypt = require('bcrypt');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Password encryption
    const hash = await bcrypt.hash(process.env.ADMIN_UESRS_PASS, 12);

    return queryInterface.bulkInsert('users', [
      {
        login: process.env.ADMIN_USER_LOGIN,
        email: process.env.ADMIN_USER_EMAIL,
        password: hash,
        role: 0
      },
      {
        login: 'kimcoding',
        email: 'kimcoding@gmail.com',
        password: hash,
        role: 2
      },
      {
        login: 'parkhacker',
        email: 'parkhacker@gmail.com',
        password: hash,
        role: 2
      }
    ]);
  },
  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {});
  }
};
