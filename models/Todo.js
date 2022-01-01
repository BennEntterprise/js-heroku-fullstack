const mongoose = require('mongoose')

const TodoSchema = new mongoose.Schema({
    text: String
});

const TodosModel = mongoose.model('Todo', TodoSchema)
module.exports = TodosModel;