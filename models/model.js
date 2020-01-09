const mongoose = require('mongoose');

const Schema = mongoose.Schema;

//SCHEMA DO BANCO DE DADOS
const userSchema = new Schema({
    nome:String,
    email:String,
    telefone:String,
    tag: String,
    criacao:{type:Date, default:Date.now},
    periodo:Date,
    orientador:String,
    acessoPermitido:Boolean
});

module.exports = mongoose.model('entradas', userSchema);