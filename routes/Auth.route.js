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

authRouter.get("/get/:name", async (req, res) =>{
    try {
        let name = req.params.name;
        let user = await AuthModel.findOne({name});
        res.send(user)
    } catch (error) {
        res.send({msg : "Somthing Went Wrong", error})
    }
});

authRouter.get("/getall", async (req, res) =>{
    try {
        let user = await AuthModel.find().sort({currect : -1});
        res.send(user)
    } catch (error) {
        res.send({msg : "Somthing Went Wrong", error})
    }
})

module.exports = {authRouter};