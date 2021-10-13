'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('comments', [
      {
        user_id: 1,
        post_id: 1,
        content: '정말 안타깝습니다...'
      },
      {
        user_id: 2,
        post_id: 1,
        content: '힘내세요...'
      },
      {
        user_id: 1,
        post_id: 2,
        content: '할 수 있습니다!!'
      },
      {
        user_id: 2,
        post_id: 3,
        content: '인생 깁니다... 인생 길어요.'
      }
    ]);
  },
  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('comments', null, {});
  }
};
