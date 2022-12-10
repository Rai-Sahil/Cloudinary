'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
	//Add 3 rows that start with a fake name
	await queryInterface.bulkInsert('Users', [
		{name: 'John Doe Fakename 1'},
        {name: 'John Doe Fakename 2'},
        {name: 'John Doe Fakename 3'}
      ], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
	 //Delete rows that start with "John Doe Fakename"
	const Op = Sequelize.Op
	await queryInterface.bulkDelete('Users', {name: {[Op.like]: 'John Doe Fakename%'}}, {});
  }
};
