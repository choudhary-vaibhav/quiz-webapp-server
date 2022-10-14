//Collection Structure
const { SchemaTypes } = require('mongoose');
const connection = require('../connection');
const Schema = connection.Schema;

const quizSchema = new Schema({
    'name':{
        type: SchemaTypes.String,
        required: [true, "quiz name not provided "],
    },
    'username':{
        type: SchemaTypes.String,
        ref: 'user',
    },
    'questions':[{
        type: SchemaTypes.ObjectId,
        ref: 'questions'
    }],
}, {collection:'quiz'})

const quizModel = connection.model('quiz', quizSchema);
module.exports = quizModel;