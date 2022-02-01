const mysql = require ('mysql2');

const util = require ('util');

const connection = mysql.createConnection(
    {
    host: "localhost",
    // MySQL username,
    user: 'root',
    // MySQL password
    password: "Oakleigh/9"
    database: "company_db"
  }
);
connection.connect();
connection.query() = util.promisify(connection.query);

module.exports = connection;
    
