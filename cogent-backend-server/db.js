const mysql = require('mysql2');

// db connection pool configuration
const dbPool = mysql.createPool({
  host: process.env.DB_HOST || 'localhost',       
  port: process.env.DB_PORT || 3306,             
  user: process.env.DB_USER || 'root',           
  password: process.env.DB_PASSWORD || '',      
  database: process.env.DB_NAME || 'cogentdb',   
  waitForConnections: true,
  connectionLimit: process.env.DB_CONNECTION_LIMIT || 10, 
  queueLimit: process.env.DB_QUEUE_LIMIT || 0    
}).promise();

// Test connection
dbPool.getConnection()
  .then(connection => {
    console.log('Connected to MySQL database as id ' + connection.threadId);
    connection.release(); 
  })
  .catch(err => {
    console.error('Failed to connect to MySQL:', err);
  });

module.exports = dbPool; 