//Import from packages
const express = require('express');
const mongoose = require('mongoose');
//Import from files
const authRouter = require('./routes/auth');

//INIT
const PORT = 3000;
const app = express();
const DB = "mongodb+srv://admin:admin@cluster0.cqgokei.mongodb.net/?retryWrites=true&w=majority"

//Middleware
app.use(authRouter);

//Connections
mongoose.connect(DB).then(()=>{
    console.log("Connected to MongoDB");
}).catch((err)=>{
    console.log(err);
})

app.listen(PORT, "0.0.0.0", () =>{
    console.log(`Server running on port ${PORT}`);
})