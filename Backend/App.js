const express = require("express");
const app = express();
require("dotenv").config();
require("./connections/conn");
const User=require("./routes/user");

//routes
app.use("/api/v1",User)
app.get('/', (req, res) => {
    res.send('Hello World!');
  }); 

//creating port
app.listen(process.env.PORT,()=>{
    console.log(`server started at port ${process.env.PORT}`);
});