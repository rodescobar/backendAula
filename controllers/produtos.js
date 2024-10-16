const Produtos = require("../models/produtos")

module.exports = {
    Listar: async (usuario) => {
        return await Produtos.find({ usuario })
    },

    Novo: async (nome, quantidade, preco, descricao, usuario, imagem) => {
        return await Produtos.create({ nome, quantidade, preco, descricao, usuario, imagem })
    },

    Alterar: async (id, nome, quantidade, preco, descricao) => {
        return await Produtos.findByIdAndUpdate(id, { nome, quantidade, preco, descricao, imagem }, { new: true})
    },

    Excluir: async (id, usuario) => {
        return await Produtos.deleteOne({ _id: id, usuario: usuario })
    },
}