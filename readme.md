# Backend para utilização em aula de TASI

## REST API

### Login

### Registrar usuário

```http
  POST /app/registrar
```

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `usuario` | `string` | **Obrigatório**. Usuário RA do aluno |
| `senha` | `string` | **Obrigatório**. Senha (não será criptografada) |
| `confirm` | `string` | **Obrigatório**. Confirmação da senha |

*Envio*
```json
{
    "usuario": "010620005",
    "senha": "123456",
    "confirma": "123456"
}
```

*Retorno*
```json
{
    "usuario": "010620005",
    "senha": "123456",
    "id": "1asdasdasdadasdasdadasda23456"
}
```
ou
```json
{
    "error": "Mensagem de erro"
}
```

### Login do usuário

```http
  POST /app/login
```

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `usuario` | `string` | **Obrigatório**. Usuário RA do aluno |
| `senha` | `string` | **Obrigatório**. Senha (não será criptografada) |

*Envio*
```json
{
    "usuario": "010620005",
    "senha": "123456"
}
```

*Retorno*
```json
{
    "token": "sdjkahdahsd jashdkjasdhajdhakjhdakdhakdh"
}
```
ou
```json
{
    "error": "Mensagem de erro"
}
```

### Produtos

### Listar Produtos
*OAuth obrigatório*

```http
  GET /app/produtos
```
*Envio* não há

*Retorno* 
```json
  [
  {
    "_id": "62730c9935071f51b98dc50a",
    "usuario": "rodescobar",
    "nome": "Almeirão",
    "quantidade": 2,
    "preco": 25,
    "descricao": "dsadadadadsdadadsad",
    "imagem": "dsadadadadsdadadsad",
    "__v": 0
  },
  {
    "_id": "62730ca6961ff894f71babd6",
    "usuario": "rodescobar",
    "nome": "Arroz",
    "quantidade": 2,
    "preco": 25,
    "descricao": "Arroz carioqinha",
    "imagem": "dsadadadadsdadadsad",
    "__v": 0
  },
  {
    "_id": "62730cd27e546aadae478e25",
    "usuario": "rodescobar",
    "nome": "a111111111111111111",
    "quantidade": 2,
    "preco": 25,
    "descricao": "dsadadadadsdadadsad",
    "imagem": "dsadadadadsdadadsad",
    "__v": 0
  },
  {
    "_id": "62730cda921c6d48e9585855",
    "usuario": "rodescobar",
    "nome": "a111111111111111113",
    "quantidade": 2,
    "preco": 25,
    "descricao": "dsadadadadsdadadsad",
    "imagem": "dsadadadadsdadadsad",
    "__v": 0
  },
  {
    "_id": "62730ce1a8eae5b87c80c1a0",
    "usuario": "rodescobar",
    "nome": "a111111111111111114",
    "quantidade": 2,
    "preco": 25,
    "descricao": "dsadadadadsdadadsad",
    "imagem": "dsadadadadsdadadsad",
    "__v": 0
  }
]
```

### Novo Produto
*OAuth obrigatório*

```http
  POST /app/produtos
```

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `nome` | `string` | **Obrigatório**. Nome do produto |
| `quantidade` | `number` | **Obrigatório**. Quantidade de produtos |
| `preco` | `number` | **Obrigatório**. Preço do produto |
| `descricao` | `string` | **Obrigatório**. Descrição do produto |
| `imagem` | `string` | **Obrigatório**. Pode ser URL ou Base64 |

*Envio*
```json
{
    "nome": "a111111111111111114",
    "quantidade": 2,
    "preco": 25,
    "descricao": "dsadadadadsdadadsad",
    "imagem": "dsadadadadsdadadsad",
}

```

*Retorno*
```json
{
    "usuario": "010620005",
    "nome": "Alface",
    "quantidade": 2,
    "preco": 25,
    "descricao": "Alface verdinha direto da fazenda",
    "imagem": "dsadadadadsdadadsad",
    "_id": "62730ce1a8eae5b87c80c1a0",
    "__v": 0
}
```
ou
```json
{
    "error": "Mensagem de erro"
}
```

### Alterar Produto
*OAuth obrigatório*

```http
  PUT /app/produtos
```

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `id` | `string` | **Obrigatório**. Id do produto |
| `nome` | `string` | **Obrigatório**. Nome do produto |
| `quantidade` | `number` | **Obrigatório**. Quantidade de produtos |
| `preco` | `number` | **Obrigatório**. Preço do produto |
| `descricao` | `string` | **Obrigatório**. Descrição do produto |
| `imagem` | `string` | **Obrigatório**. Pode ser URL ou Base64 |

*Envio*
```json
{
    "id": "62730ca6961ff894f71babd6",
    "nome": "Arroz",
    "quantidade": 2,
    "preco": 25,
    "descricao": "Arroz carioqinha",
    "imagem": "dsadadadadsdadadsad"
}
```

*Retorno*
```json
{
  "_id": "62730ca6961ff894f71babd6",
  "usuario": "rodescobar",
  "nome": "Arroz",
  "quantidade": 2,
  "preco": 25,
  "descricao": "Arroz carioqinha",
  "imagem": "dsadadadadsdadadsad",
  "__v": 0
}
```
ou
```json
{
    "error": "Mensagem de erro"
}
```

### Excluir Produto
*OAuth obrigatório*

```http
  DELETE /app/produtos
```

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `id` | `string` | **Obrigatório**. Nome do produto |

*Envio*
```json
{
    "id": "62730ca6961ff894f71babd6"
}
```

*Retorno*
```json
{
  "acknowledged": true,
  "deletedCount": 1
}
```
ou
```json
{
    "error": "Mensagem de erro"
}
```
### OAuth
- Adição da tag Authorization no header da chamada
- Utilização de Bearer
```Bearer <TOKEN>```

[Exemplo](exemplo\image.png)