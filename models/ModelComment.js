const mongoose = require('mongoose');

// Definir el esquema y modelo del documento
const mySchema = new mongoose.Schema({
    _id: {
      $oid: String,
    },
    userId: String,
    objectId: String,
    comment: String,
  });

const MyModelComment = mongoose.model('MyModel2', mySchema, 'bdnosql_comments');

module.exports = MyModelComment