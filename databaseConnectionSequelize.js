const is_heroku = process.env.IS_HEROKU || false;

const dbConfigHeroku = "mysql://b610dff3ff0b78:752a6bb5@us-cdbr-east-03.cleardb.com/heroku_d7b867a1c050f3a?reconnect=true";

const dbConfigLocal = "mysql://root:Password@localhost/lab_example";

if (is_heroku) {
	var databaseConnectionString = dbConfigHeroku;
}
else {
	var databaseConnectionString = dbConfigLocal;
}

module.exports = databaseConnectionString;
		