const { Schema, model } = require('mongoose');

const TargetasSchema = new Schema({
    title: String,
    power: String,
    defending: String,
    description: String,
    imageURL: String
});

module.exports = model('Targetas', TargetasSchema);