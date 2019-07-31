const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TestSchema = new Schema({
    username:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    }
}, { collection: 'test' } )


const Test = module.exports = mongoose.model('Test', TestSchema);