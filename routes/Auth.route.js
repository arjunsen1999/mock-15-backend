const express = require('express');
const authRouter = express.Router();
const { AuthModel } = require('../models/Auth.model');


authRouter.post("/add", async(req, res) =>{
    try {
        await AuthModel.create(req.body);
        res.send("Successfully Create");
    } catch (error) {
        res.send({msg : "Somthing Went Wrong", error})
    }
})

authRouter.get("/get/:name", VerifyToken, async (req, res) =>{
    try {
        let id = req.authId;
        res.send(id)
    } catch (error) {
        res.send({msg : "Somthing Went Wrong", error})
    }
})

module.exports = {authRouter};