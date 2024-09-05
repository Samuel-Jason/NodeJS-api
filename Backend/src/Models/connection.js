const mysql = require('mysql2/promise');

const connection = mysql.createPool({
    host: process.env.MISQL_HOST,
    user: process.env.MISQL_USER,
    password: process.env.MISQL_PASSWORD,
    database: process.env.MISQL_DB
});

module.exports = connection;