(function (diggi) {
  'use strict';

  diggi.Routers.Main = function ($routeProvider) {
    $routeProvider
    .when('/unknown', {
      templateUrl: 'tmpl/angular/unknown.html',
      controller: 'UnknownController'
    })
    .otherwise({
      redirectTo: '/unknown'
    });
  };

})(window.diggi || (window.diggi = {Services: {}, Controllers: {}, Routers: {}}));

