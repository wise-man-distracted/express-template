module.exports = {

    listarContatos: (req, res)=>{

        let contatos = require(`../database/contatos_${req.usuario.id}.json`)
        res.render(
            'index', 
            {
                contatos: contatos

            })
    },

    capturarContato: (req, res) => {

        let contatos = require(`../database/contatos_${req.usuario.id}.json`)

        // Descobrir o id do contato que o usuário quer

        let idDoContato = req.params.id;

        // Encontrar o contato que tem o ID desejado

        let contato = contatos.find(
            (c) => {
                return c.id == idDoContato
            }
        )

        // Retornar o contato para o cliente ou uma msg de erro se o contato não existir
            if(contato === undefined) {
                res.send({msg: "O contato buscado não existe"})
            } else {
                res.send(contato)
            }
    }

}