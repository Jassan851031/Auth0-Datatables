/*
* KnexJS database connection information
* Created by http://editor.datatables.net/generator
*/

let knex = require('knex');

module.exports = knex({
	client: 'mysql',

	connection: {
		database:    'data_table',
		host:        'localhost',
		password:    'root1234+',
		user:        'root',
		port: 		  3307,
		dateStrings: true
	}
});
