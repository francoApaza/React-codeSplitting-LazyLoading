const Conn = require('../config/connectionMysql');

const Produtos = function(produtos) {
    return this;
}

Produtos.getAll = result => {
    const sql = "SELECT * FROM produto";
    Conn.query(sql, (error, res) => {
        if (error){
            return error;
        } console.log("produto: ", res);
        result(null, res);
    })
}

module.exports = Produtos;