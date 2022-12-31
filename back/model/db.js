const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'datab',
  user: 'root',
  password: 'root',
  database: 'tfs_db',
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