const express = require('express');
const app = express();
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path'); 
const bodyParser = require('body-parser');


dotenv.config();

const DbService = require('./dbServices');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


//! Layanan ====

app.get('/getAllLayanan', (request, response) => {
   const db = DbService.getDbServiceInstance();

   const result = db.getAllLayanan();
   result
      .then(data => response.json({ data: data }))
      .catch(err => console.log(err));
});


//! User Bro ====
app.get('/getUser', (request, response) => {
   const db = DbService.getDbServiceInstance();

   const result = db.getUser();
   result
      .then(data => response.json({ data: data }))
      .catch(err => console.log(err));
});
app.post("/insertUser", (request, response) => {
   const { username, password} = request.body;
   const db = DbService.getDbServiceInstance();
   const result = db.insertUser(username, password);
   result
      .then(data => response.json({ success: true, data: data }))
      .catch(err => console.log(err));
});

const PORT = process.env.PORT || 2000;
app.listen(PORT, () => {
   console.log(`Server is running on port ${PORT}`);
});




