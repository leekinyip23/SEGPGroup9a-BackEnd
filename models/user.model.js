const { numberTypeAnnotation } = require('babel-types');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//add nickname, age , gender, location. Nick name is diff from username(which is for login)
//
const userSchema = new Schema({
    username: {
        type: String, default: null
    },
    nickname: {
        type: String, default: null
    },
    age: {
        type: Number, default: null
    },
    gender: {
        type: Boolean, default: null
    },
    location: {
        type: String, default: null
    },
    password: {
        type: String, default: null
    }
},
    {timestamps: true});

const User = mongoose.model('User', userSchema)
  
module.exports = User;  