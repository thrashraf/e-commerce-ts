import mysql from 'mysql2';
import dotenv from 'dotenv';

dotenv.config();

const pool = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
})

// const sql = 'SELECT * FROM products'; n

// pool.execute(sql, (err, result) => {

//     if (err) throw err;

//     console.log(result);

// });

export default pool.promise()

