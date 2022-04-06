const bcrypt = require('bcrypt');
const fs = require('fs');
const path = require('path');
let usuarios = require('../database/usuarios.json')

module.exports = {
    showRegistrar: (req, res) => {
        res.render('signin')
    },
    store: (req, res) => {
        let {nome, email, password} = req.body;
        let newId = usuarios[usuarios.length - 1].id + 1;
        let cryptoPassword = bcrypt.hashSync(password, 10);
        let usuario = {
            "id": newId,
            "nome": nome,
            "email": email,
            "senha": cryptoPassword
        }
        usuarios.push(usuario)
        fs.writeFileSync(path.join(__dirname, '/../database/usuarios.json'), JSON.stringify(usuarios, null, 4));
        res.redirect('/contatos')
    },
    mostrarLogin: (req, res) => {
        res.render('login')
    },
    login: (req, res) => {
        let {email, senha} = req.body;
        const usuarios = require('../database/usuarios.json')
        usuarios.find(u => u.email == email && bcrypt.compareSync(senha, u.senha))
        res.redirect;
    }
}