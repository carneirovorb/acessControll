const modelUsers = require('../models/model');


module.exports.CRUD = {
    //BUSCAR TODOS OS USUÁRIOS CADASTRADOS
    'find':
        function(done){
            modelUsers.find(done)
        },
    //BUSCAR USUÁRIOS POR IS
    'findId':
        function(id, done){
            modelUsers.findById(id, done);
        },
    //CADASTRAR NOVO USUÁRIO
    'create':
        function(body, done){
            var userObj = new modelUsers(body);
            userObj.save(function(err){
                done(err);
            });
        },
    //MODIFICAR DADOS DE USUARIO EXISTENTE
    'update':
        function(id,body, done){
            console.log(body);

            modelUsers.findById(id, function (err, user) {
                user.nome = body.nome;
                user.telefone = body.telefone;
                user.email = body.email;
                user.tag = body.tag;
                user.periodo = body.periodo;
                user.orientador = body.orientador;
                user.acessoPermitido = body.entradaPermitida;
                user.save(function (err) {
                   done(err);
                 });
            })
        },
        //DELETAR USUARIO CADASTRADOS
        'remove':
            function(id, done){
                modelUsers.remove({_id:id}, function(err, user){
                    done(err);
                });
            }
}



