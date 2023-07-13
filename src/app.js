const express = require('express');
require('dotenv').config();

const userRoute = require('./routes/users.routes');
const tasksRoute = require("./routes/tasks.routes")
const categoriesRoute = require("./routes/categories.routes")


const iniModels = require('./models/init.model');
const db = require('./utils/database');
const cors = require('cors');


iniModels();

db.sync().then(() => console.log('DB conected!')); 

const app =  express();

app.use(cors());

const PORT = process.env.DB_PORT_SERVER ?? 8000
app.use(express.json()); //

app.use(userRoute,tasksRoute,categoriesRoute);



app.get("/", (req, res) => {
    res.send("Welcome to me server!");
  });
  
  app.listen(PORT, () => {
    console.log("Server listening!");
  });