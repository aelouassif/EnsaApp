// Ionic Starter App

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
//angular.module('filieres', [])
.controller('Filieres', function($scope, $http) 
{
    $http.get('http://localhost/EnsaApp/server/filieres.php').then(function(resp) 
        {
            document.getElementById("filieres").innerHTML = '<div class="list">';
            for(var i = 0; i < resp.data.length; i++)
            {
                document.getElementById("filieres").innerHTML += '<a class="item item-thumbnail-left" href="register_' + resp.data[i]["id"] + '.html" > <img src="../../server/img/filiere_' + resp.data[i]["id"] + '.jpg"> <h2>' + resp.data[i]["nom"] + '</h2> </a>'; 
            }

            document.getElementById("filieres").innerHTML += "</div>";
            console.log(resp.data);

        },
        function(err) 
        {
            console.error('ERR', err);
        })
})

