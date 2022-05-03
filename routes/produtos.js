const express = require("express")

const route = express.Router()

const Produtos = require("../controllers/produtos")


route.get("/produtos/listar", async (req, res) => {
    const usuario = req.usuarioId

    var retorno = await Produtos.Listar(usuario)

    return res.send(retorno)
})

route.post("/produtos/novo", async (req, res) => {
    const { nome, quantidade, preco, descricao } = req.body
    const usuario = req.usuarioId

    if (nome == "" || nome == undefined)
        return res.send({ erro: "Nome do produto não pode ser nulo." })

    if (quantidade == "" || quantidade == undefined)
        return res.send({ erro: "Quantidade não pode ser nula." })

    if (preco == "" || preco == undefined)
        return res.send({ erro: "Preço não pode ser nulo." })

    if (descricao == "" || descricao == undefined)
        return res.send({ erro: "Descrição não pode ser nula." })


    var ret = await Produtos.Novo(nome, quantidade, preco, descricao, usuario)
    return res.send(ret)
})

module.exports = app => app.use("/app", route)