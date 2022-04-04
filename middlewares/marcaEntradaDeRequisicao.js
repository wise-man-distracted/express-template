// a função deve reistrar a d data e a hora que a requisição foi realizado
const fs = require('fs')
const path = require('path')
module.exports = (req, res, next) => {
    let agora = (new Date()).toISOString()
    fs.appendFileSync(path.join(__dirname, '/../database/hora_acessada.json'), JSON.stringify(agora) + "/n" )
    console.log(agora)
    
    //capturar a string com a data e a hora
    //escrever essa string em um arquivo
    next()
}