const mysql = require('mysql');
const dotenv = require('dotenv');
dotenv.config();

let instance = null;

const connection = mysql.createConnection({
   host: 'localhost',
   port: 3306,
   user: 'root',
   password: '',
   database: 'bengkel',
});

connection.connect((err) => {
   if (err) {
      console.error('Database connection error:', err.message);
   }
});

class DbService {
   static getDbServiceInstance() {
      return instance ? instance : new DbService();
   }
   async getAllLayanan() {
      try {
         const response = await new Promise((resolve, reject) => {
            const query = "SELECT * FROM layanan;";
            connection.query(query, (err, results) => {
               if (err) reject(new Error(err.message));
               resolve(results);
            });
         });
         return response;
      } catch (error) {
         console.error('Error fetching all layanan:', error);
         return false;
      }
   }
   //! =====
   async getUser() {
      try {
         const response = await new Promise((resolve, reject) => {
            const query = "SELECT * FROM user;";
            connection.query(query, (err, results) => {
               if (err) reject(new Error(err.message));
               resolve(results);
            });
         });
         return response;
      } catch (error) {
         console.error('Error fetching all user:', error);
         return false;
      }
   }
   async insertUser(username, password) {
      try {
         const insertId = await new Promise((resolve, reject) => {
            const query = "INSERT INTO user (username, password, role) VALUES (?, ?, 'pelanggan');";
            connection.query(query, [username, password], (err, result) => {
                  if (err) {
                     reject(new Error(err.message));
                  } else {
                     if (result && result.insertId) {
                        resolve(result.insertId);
                     } else {
                        reject(new Error('Insert operation did not return an insertId'));
                     }
                  }
            });
         });

         return {
            id: insertId,
            username: username,
            password: password,
         };
      } catch (error) {
         console.error('Error inserting new user:', error);
         return false;
      }
   }
}

module.exports = DbService;
