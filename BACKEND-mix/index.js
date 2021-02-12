const express = require('express'),
mongo = require('./config/connectionMongoDb'),
server = express(),
cors = require('cors');

server.use(cors());
server.use(express.json());

require('./routes/comentarios.js')(server);
require('./routes/produtos.js')(server);

server.get('/', (req, res) =>{
res.json({message: "hola mundo!"})
})

server.listen(8080, () => {
console.log("Server on!!!")
});