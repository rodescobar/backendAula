const Produtos = require("../models/produtos")

module.exports = {
    Listar: async (usuario) => {
        return await Produtos.find({ usuario })
    },

    Novo: async (nome, quantidade, preco, descricao, usuario) => {
        return await Produtos.create({ nome, quantidade, preco, descricao, usuario })
    },

    Alterar: async (id, nome, quantidade, preco, descricao) => {
        return await Produtos.findByIdAndUpdate(id, { nome, quantidade, preco, descricao }, { new: true})
    },

    Excluir: async (id, usuario) => {
        return await Produtos.deleteOne({ _id: id, usuario: usuario })
    },
}