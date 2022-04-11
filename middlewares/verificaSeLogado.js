module.exports = (req, res, next) =>  {
    if(req.session.usuario == undefined){
        return res.redirect('/login');
    }
    req.usuario = req.session.usuario;
    next()
}