const Produtos = require('../models/produtos');

exports.findAll = (req, res) => {
    Produtos.getAll((error, result) => {
        if (error) {
            return error;
        } res.send(result);
    })
}