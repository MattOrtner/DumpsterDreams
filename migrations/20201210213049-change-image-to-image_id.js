'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.removeColumn('Products', 'image')
    queryInterface.addColumn('Products', 'image')
    //^^need to finsish addColumn
    //re-write down key below
    //[we were removing column image and replacing it with image_id]
    
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn(
      'Products',
      'image_id',
      {
        type: Sequelize.DataTypes.STRING,
      }
    ),
      await queryInterface.renameColumn('Products', 'image_id', 'image')
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
