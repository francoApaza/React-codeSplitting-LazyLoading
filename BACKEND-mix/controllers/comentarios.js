const Comentario = require('../models/comentario');

exports.create = (req, res) => {
    if(!req.body){
        res.status(400).send({
            message: "Content can not be empty"
        })
    }

    const comentario = new Comentario({
        nome: req.body.nome,
        msg: req.body.msg
    })

    Comentario.create(comentario, (error, results) => {
        if(error){
            res.send(results)
        } res.send(results);
    })
}

// exports.findAll = (req, res) => {
//     Comentario.getAll((error, results) => {
//         if(error){
//             return error;
//         } res.send(results);
//     })
// }

// exports.delete = (req, res) => {
//     const {commentId} = req.params
//     Comentario.delete(commentId, (error, results) => {
//         if(error){
//             return error;
//         }   res.send({message: `Comentário deletado`})
//     })
// }