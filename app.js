//CARREGANDO MODULOS
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const routers = require('./routers/routers');
const config = require('./config/config');

//CONFIGURAÇÕES
const app = express();
const PORT = process.env.PORT || 3000;
mongoose.connect(config.mongoDB);
const router = express.Router();

// MIDDLEWARES
app.use(bodyParser.json());
app.use('/api', routers);
app.use('/public', express.static(__dirname+'/public'));

//GET no endpoint /
app.get('/', function(req, res){
    res.sendFile(__dirname+'/public/index.html');
})

mongoose.connection.on('connected', function () {
    console.log('Conexão com o mongoDB estabelecida');
});

//INICIALIZANDO O SERVIDOR
app.listen(PORT, function(){
	console.log('Servidor rodando em localhost:'+PORT);
})