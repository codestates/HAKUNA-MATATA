'use strict';
require('dotenv').config();
const bcrypt = require('bcrypt');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Password encryption
    const hash = await bcrypt.hash(process.env.ADMIN_UESRS_PASS, 12);

    return queryInterface.bulkInsert('users', [
      {
        email: process.env.ADMIN_USER_EMAIL,
        password: hash,
        nickname: 'user1',
        role: 0
      },
      {
        email: 'kimcoding@gmail.com',
        password: hash,
        nickname: 'user2',
        role: 2
      },
      {
        email: 'parkhacker@gmail.com',
        password: hash,
        nickname: 'user3',
        role: 2
      }
    ]);
  },
  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {});
  }
};
