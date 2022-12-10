const mysql = require('mysql2');

const is_heroku = process.env.IS_HEROKU || false;
//mysql://b610dff3ff0b78:752a6bb5@us-cdbr-east-03.cleardb.com/heroku_d7b867a1c050f3a?reconnect=true
const dbConfigHeroku = {
	host: "us-cdbr-east-03.cleardb.com",
	user: "b610dff3ff0b78",
	password: "752a6bb5",
	database: "heroku_d7b867a1c050f3a",
	multipleStatements: false,
	namedPlaceholders: true
};

const dbConfigLocal = {
	host: "localhost",
	user: "root",
	password: "Password",
	database: "lab_example",
	multipleStatements: false,
	namedPlaceholders: true
};

if (is_heroku) {
	var database = mysql.createPool(dbConfigHeroku);
}
else {
	var database = mysql.createPool(dbConfigLocal);
}

module.exports = database;
		