const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
        type: String,
        trim: true,
        //required: true
    },
    password: {
        type: String,
        trim: true,
        //required: true
    },
    journals:[{
        type: Schema.ObjectId, ref: 'Journal'   //tells mongoose to look for journal schema. Linked to a single journal id.
    }]
},
    {timestamps: true});

const User = mongoose.model('User', userSchema)

module.exports = User;  