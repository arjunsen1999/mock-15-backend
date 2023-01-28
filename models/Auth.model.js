const mongoose = require('mongoose');

const authSchema = mongoose.Schema({
    name : {type : String, required : true},
    amount : { type: String, required: true, unique : true },
    currect : { type: String, required: true },
}, {
    versionKey : false,
    timestamps : true
});

const AuthModel = mongoose.model('auth', authSchema);
module.exports = { AuthModel };