const bcrypt = require('bcrypt');
const fs = require('fs');
const path = require('path');


module.exports = {
    showRegistrar: (req, res) => {
        res.render('signin')
    },
    store: (req, res) => {
        const usuarios = require('../database/usuarios.json')
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
        const usuarios = require('../database/usuarios.json')
        let {email, senha} = req.body;
        let usuario = usuarios.find(u => u.email == email && bcrypt.compareSync(senha, u.senha))
        if(usuario == undefined){
            return res.render("login.ejs", {erro:1, email, senha})
        }/*  else {
            req.session.usuario = usuario;
            res.redirect('/contatos');
        } */
        req.session.usuario = usuario;
        res.redirect('/contatos')
    }
}