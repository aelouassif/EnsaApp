/*
    ToDo
    ====
Le fichier doit etre découpé et mieux organisé parceque là c'est vraiment le bordel :x

Et je dois me faire un plan clair sinon je vais vite me retrouver avec un code duppliqué partout 

La structure est à revoir donc .

*/


// Ionic Starter App

//Configuration à modifier si vous voulez déployer ce script
rootServ = 'http://localhost/EnsaApp/server';

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.controller('FilieresController', function($scope, $http, $timeout) 
{
    $scope.rootServ = rootServ;
    $scope.data = [];
    $http.get('http://localhost/EnsaApp/server/filieres.php').then(function(resp) 
        {
            $scope.data = resp.data;
        },
        function(err) 
        {
            console.error('ERR', err);
        });
    $scope.setFiliere = function(id)
    {
        window.localStorage['idFiliere'] = id;
    };
})

.controller('NiveauController', function($scope, $http, $timeout) 
{
    $scope.rootServ = rootServ;
    $scope.data = [];
    $http.get('http://localhost/EnsaApp/server/niveaux.php?id=' + window.localStorage['idFiliere']).then(function(resp) 
        {
            $scope.data = resp.data;

            for(var i = 0; i < $scope.data.length; i++)
            {
                switch($scope.data[i]['lvl'])
                {
                    case "1":
                        $scope.data[i]['nom'] = 'Première année';
                        break;
                    case "2":
                        $scope.data[i]['nom'] = 'Deuxième année';
                        break;
                    case "3":
                        $scope.data[i]['nom'] = 'Troisième année';
                        break;
                    default:
                        $scope.data[i]['nom'] = 'X éme année'; //Si ca s'affiche c'est que j'ai mérdé quelquepart :-° 
                        break;
                }
            }
        },
        function(err) 
        {
            console.error('ERR', err);
        });
    for(var i = 0; i < $scope.data.length; i++)
    {
        switch($scope.data[i]['lvl'])
        {
            case 1:
                $scope.data[i]['nom'] = 'Première année';
                break;
            case 2:
                $scope.data[i]['nom'] = 'Deuxième année';
                break;
            case 3:
                $scope.data[i]['nom'] = 'Troisième année';
                break;
            default:
                $scope.data[i]['nom'] = 'X éme année'; //Si ca s'affiche c'est que j'ai mérdé quelquepart :-° 
                break;
        }
    }
            
    $scope.setNiveau = function(id)
    {
        window.localStorage['idNiveau'] = id;
    };
})

.controller('FormRegisterController', function($scope, $http, $timeout) 
{
    
});
