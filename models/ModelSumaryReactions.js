const mongoose = require('mongoose');

// Definir el esquema y modelo del documento
const mySchema = new mongoose.Schema({
    _id: {
        objectId: String,
        reactionId: String,
    },
    n: {
        type: Number,
        get: v => Math.round(v),
        set: v => Math.round(v),
        alias: 'número',
    },
});

const MyModel = mongoose.model('MyModel', mySchema, 'bdnosql_sumaryReactions');

module.exports = MyModel