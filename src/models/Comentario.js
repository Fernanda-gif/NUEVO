const { Schema, model } = require('mongoose');

const ComentariosSchema = new Schema({
    name: String,
    comment: String,
    idcard: {type: Schema.ObjectId, ref: 'Targeta' },
});

module.exports = model('Comentarios', ComentariosSchema);