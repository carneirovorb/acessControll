angular.module('app')
    .config(function ($routeProvider) {
        $routeProvider.when('/', {
            templateUrl: '/public/components/view/listUsers.html',
            controller: 'ListUserController'

        });
        $routeProvider.when('/cadastrarUsuario', {
            templateUrl: '/public/components/view/addUser.html',
            controller: 'AddUserController'
        });
        $routeProvider.when('/editarUsuario/:id', {
            templateUrl: '/public/components/view/editUser.html',
            controller: 'EditUserController'
            
        });
        $routeProvider.otherwise({redirectTo:"/"})
    });
