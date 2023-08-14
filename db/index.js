const mysql = require('mysql');

const dotenv = require('dotenv');
dotenv.config();

const connection = mysql.createConnection({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DB,
    port: process.env.MYSQL_PORT,
});

connection.connect((err) => {
    if (err) throw err;
    console.log('Connected!');
});

exports.defaults = connection;