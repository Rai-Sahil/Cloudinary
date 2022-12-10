'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
	await queryInterface.createTable('users', 
		{ users_id: {type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true}, 
		  full_name: {type: Sequelize.STRING}
		}
	);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
	 await queryInterface.dropTable('users');
  }
};
