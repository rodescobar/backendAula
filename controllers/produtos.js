const Produtos = require("../models/produtos")

module.exports = {
    Listar: async (usuario) => {
        return await Produtos.find({ usuario })
    },

    Novo: async (nome, quantidade, preco, descricao, usuario) => {
        return await Produtos.create({ nome, quantidade, preco, descricao, usuario })
    },
}