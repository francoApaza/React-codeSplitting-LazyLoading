module.exports = server => {
    Comentarios = require('../models/comentario');

    server.post('/comentario', async (req, res) => {
        const { nome, msg } = req.body;
        const result = await Comentarios.create({ nome, msg });
        res.send(result)
    })

    server.get('/comentario', async (req, res) => {
        const result = await Comentarios.find();
        res.send(result)
    })
}    