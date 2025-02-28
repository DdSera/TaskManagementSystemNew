require(".dotenv").config(); //use for load enviorement variables

const express = require("express"); //import express js
const cors = require("cors"); //import cors middleware

const app = express(); //create an express app

app.use(cors()); //Enables cors- Allows frontend to access the backend
app.use(express.jsonL()); // Middleware to parse JSON request bodies

app.get("/", (req, res) => {
  res.send("Task management api is running...");
}); //Test route

//Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server Running on Port ${PORT}`);
});
