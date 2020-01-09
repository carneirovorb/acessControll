angular.module('app', ['ngRoute']);

angular.module('app')
    .controller('ListUserController', ['$scope', '$http', function ($scope, $http) {

        $scope.users = [];


        function load() {
            $http.get("/api/user")
                .then(function (result) {
                    $scope.users = result.data;
                });

            $('.collapsible').collapsible();
        };
        load();

    }])

    .controller('AddUserController', ['$scope', '$http', function ($scope, $http) {

        $scope.userData = {}

        $scope.cadastrarUsuario = function (nome, telefone, tag, email, orientador, data, entradaPermitida) {

            $scope.userData.nome = nome;
            $scope.userData.email = email;
            $scope.userData.telefone = telefone;
            $scope.userData.tag = tag;
            $scope.userData.periodo = data;
            $scope.userData.orientador = orientador;


            var r = confirm("Confirmar o cadastro de " + $scope.userData.nome);
            if (r == true) {
                $http.post('/api/user', $scope.userData)
                .then(
                    function (response) {
                        // success callback
                        Materialize.toast('Usuário cadastrado com sucesso', 3000);
                       
                    },
                    function (response) {
                        // failure callback
                    }
                )
            }
             $location.path("/#!/");
        };



    }])

    .controller('EditUserController', ['$scope', '$http', '$routeParams', function ($scope, $http, $routeParams) {
        var id = $routeParams.id;
        $scope.user = [];
        function load() {
            $http.get("/api/user/" + id)
                .then(function (result) {
                    $scope.user = result.data;
                });
        };
        load();






        $scope.editarUsuario = function (id, nome, telefone, tag, email, orientador, data, entradaPermitida) {

            userData = {}
            userData.nome = nome;
            userData.email = email;
            userData.telefone = telefone;
            userData.tag = tag;
            userData.periodo = data;
            userData.orientador = orientador;
            userData.entradaPermitida = entradaPermitida;

            url = '/api/user/' + id;

            var r = confirm("Confirmar edição de " + userData.nome);
            if (r == true) {
                $http.put(url, userData)
                    .then(
                    function (response) {
                        // success callback
                        Materialize.toast('Usuário editado com sucesso', 3000);
                      
                    },
                    function (response) {
                        // failure callback
                    }
                    );
            }
              $location.path("/");
        };


        $scope.removerUsuario = function (id, nome) {
            url = '/api/user/' + id;

            var r = confirm("Confirmar remoção de " + nome);
            if (r == true) {
                $http.delete(url)
                    .then(
                    function (response) {
                       Materialize.toast('Usuário removido com sucesso', 3000);
                       
                    },
                    function (response) {
                        // failure call back
                    }
                    );
            }

            $location.path("/");

        }

        }]);