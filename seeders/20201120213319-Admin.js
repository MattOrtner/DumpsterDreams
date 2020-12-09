'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('User', [
      {
        firstName: 'Matthew',
        lastName: 'Ort',
        email: 'asdf@gnai.com',
        password: 'asdf',
      },
      {
        firstName: 'Lucas',
        lastName: 'C',
        email: 'l;kj@sdfkj.com',
        password: 'idc',
      }
    ], {})
    
    /**
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
