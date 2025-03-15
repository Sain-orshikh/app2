const { Pool } = require('pg');

const pool = new Pool({
    host: 'db',
    port: 5432,
    user: "zlog",
    password: "123456",
    database: "db123"
});

module.exports = { pool };