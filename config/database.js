//importar o mongoose
const mongoose = require('mongoose')
//scripts de conexão
const conn = async()=>{
    const atlas = await mongoose.connect('mongodb+srv://userLR:pasquini44@cluster0.bvp72.mongodb.net/dblr')
}

//exportar as infomações para acesso externo
module.exports = conn 