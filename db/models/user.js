//Collection Structure
const { SchemaTypes } = require('mongoose');
const connection = require('../connection');
const Schema = connection.Schema;

const userSchema = new Schema({
    'name': {
        type: SchemaTypes.String,
        required: [true, "name not provided "],
    },
    'username': {
        type: SchemaTypes.String,
        required: [true, "username not provided "],
        unique: [true, "username already exists "],
        lowercase: true,
        trim: true,
    },
    'email': {
        type: SchemaTypes.String,
        required: [true, "email not provided "],
        unique: [true, "email already exists "],
        lowercase: true,
        trim: true,
        validate: {
            validator: function (v) {
              return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
            },
            message: '{VALUE} is not a valid email! '
          }
    },
    'password': {
        type: SchemaTypes.String,
        required: true,
    },
    'quizzes': [{
        type: SchemaTypes.ObjectId,
        ref: 'quiz',
    }],
});

const UserModel = connection.model('users', userSchema);
module.exports = UserModel;