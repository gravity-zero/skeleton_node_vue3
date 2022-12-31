const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'my_database',
  user: 'root',
  password: 'root',
  database: 'my_db',
  port: 3306
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to the database: ' + err.stack);
    return;
  }
  console.log('Connected to the database as id ' + connection.threadId);
});

module.exports = connection;