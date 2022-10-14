//Collection Structure
const { SchemaTypes } = require('mongoose');
const connection = require('../connection');
const Schema = connection.Schema;

const questionSchema = new Schema({
    'quesDesc':{
        type: SchemaTypes.String,
        required: [true, "question description not provided "],
    },
    'optA':{
        type: SchemaTypes.String,
        required: [true, "option A is not provided "],
    },
    'optB':{
        type: SchemaTypes.String,
        required: [true, "option B is not provided "],
    },
    'optC':{
        type: SchemaTypes.String,
        required: [true, "option C is not provided "],
    },
    'optD':{
        type: SchemaTypes.String,
        required: [true, "option D is not provided "],
    },
    'ans':{
        type: SchemaTypes.String,
        required: [true, "correct answer is not provided "],
    },
    'quizName':{
        type: SchemaTypes.ObjectId,
        ref: 'quiz'
    },   
}, {collection:'questions'})

const questionModel = connection.model('questions', questionSchema);
module.exports = questionModel;