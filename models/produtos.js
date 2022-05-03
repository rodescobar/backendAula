const mongoose = require('./database')

const { Schema } = mongoose;

const Produtos = new Schema({
    usuario: {
        type: String,
        required: true
    },
    nome:  {
        type: String,
        required: true
    },
    quantidade: {
        type: Number,
        required: true
    },
    preco: {
        type: Number,
        required: true
    },
    descricao:  {
        type: String,
        required: true
    }
});

const Prod = mongoose.model('Produtos', Produtos);

module.exports = Prod
