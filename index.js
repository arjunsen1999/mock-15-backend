require('dotenv').config()
const express = require('express');
const PORT = process.env.PORT;
const app = express();
const cors = require('cors');
const {connection} = require("./config/connection");
const { authRouter } = require('./routes/Auth.route');


/// Middleware
app.use(express.json());
app.use(cors());

app.get("/", (req, res) =>{
    res.send("Hello from other side!");
})

app.use("", authRouter);


app.listen(PORT, () => {
    connection();
    console.log(`Server Running on http://localhost:${PORT}`);
});