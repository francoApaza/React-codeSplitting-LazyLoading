const { Schema, model } = require('mongoose')

const ComentarioSchema = new Schema({
    nome: {
        type: String
    },
    msg: {
        type: String
    },
    data_registro: {
       type: Date,
       default: new Date()
    }
})

schemaModel = model('comentario', ComentarioSchema)

module.exports = schemaModel;