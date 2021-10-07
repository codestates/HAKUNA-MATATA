'use strict';
require('dotenv').config();
const bcrypt = require('bcrypt');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Password encryption
    const hash = await bcrypt.hash(process.env.ADMIN_UESRS_PASS, 12);

    return queryInterface.bulkInsert('users', [
      {
        user_login: process.env.ADMIN_USER_LOGIN,
        user_email: process.env.ADMIN_USER_EMAIL,
        user_password: hash,
        user_role: 0
      },
      {
        user_login: 'kimcoding',
        user_email: 'kimcoding@gmail.com',
        user_password: hash,
        user_role: 2
      },
      {
        user_login: 'parkhacker',
        user_email: 'parkhacker@gmail.com',
        user_password: hash,
        user_role: 2
      }
    ]);
  },
  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {});
  }
};
