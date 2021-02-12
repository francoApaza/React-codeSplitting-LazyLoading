module.exports = server => {
    const produtos = require('../controllers/produtos')

    server.get('/produtos', produtos.findAll);
};