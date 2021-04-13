const { numberTypeAnnotation } = require('babel-types');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//add nickname, age , gender, location. Nick name is diff from username(which is for login)
//
const userSchema = new Schema({
    username: {
        type: String
    },
    nickname: {
        type: String
    },
    age: {
        type: Number
    },
    gender: {
        type: Boolean
    },
    location: {
        type: String
    },
    password: {
        type: String
    }
},
    {timestamps: true});

const User = mongoose.model('User', userSchema)
  
module.exports = User;  