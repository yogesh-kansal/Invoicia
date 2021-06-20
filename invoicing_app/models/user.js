const mongoose = require('mongoose');
const Schema= mongoose.Schema;

const userschema = new Schema({
    email: {
        type: String, 
        required: true
    },
    password: {
        type: String,
        required: true
    }
},
{
    timestamps: true
});

const user = mongoose.model('user',userschema);
module.exports = user;