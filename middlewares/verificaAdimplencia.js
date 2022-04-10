module.exports = (req, res, next) => {
    let usuarios = require('../database/usuarios.json')

    let usuario = usuarios.find(
        u => u.id == req.session.usuario.id
    )
    if(usuario.adimplente){
        next()
    } else {
        res.send("Non deu rapa procura o serasa")
    }
}