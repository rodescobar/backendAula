const express = require("express")

const route = express.Router()

const Produtos = require("../controllers/produtos")


route.get("/produtos", async (req, res) => {
    const usuario = req.usuarioId

    var retorno = await Produtos.Listar(usuario)

    return res.send(retorno)
})

route.post("/produtos", async (req, res) => {
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

route.put("/produtos", async (req, res) => {
    const { id, nome, quantidade, preco, descricao } = req.body
    
    if (id == "" || id == undefined)
        return res.send({ erro: "Id não pode ser nulo." })

    if (nome == "" || nome == undefined)
        return res.send({ erro: "Nome do produto não pode ser nulo." })

    if (quantidade == "" || quantidade == undefined)
        return res.send({ erro: "Quantidade não pode ser nula." })

    if (preco == "" || preco == undefined)
        return res.send({ erro: "Preço não pode ser nulo." })

    if (descricao == "" || descricao == undefined)
        return res.send({ erro: "Descrição não pode ser nula." })

    var ret = await Produtos.Alterar(id, nome, quantidade, preco, descricao)
    return res.send(ret)
})

route.delete("/produtos", async(req, res) => {
    const { id } = req.body
    const usuario = req.usuarioId

    if (id == "" || id == undefined)
        return res.send({ erro: "Id não pode ser nulo." })

    var ret = await Produtos.Excluir(id, usuario)
    return res.send(ret)

})

module.exports = app => app.use("/app", route)