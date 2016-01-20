(function (diggi) {
  'use strict';

  diggi.app = angular.module('diggi-app', ['ngRoute', 'templates-dist']);
  diggi.app.config(['$routeProvider', diggi.Routers.Main]);

  diggi.app.controller('UnknownController', diggi.Controllers.Unknown);

})(window.diggi || (window.diggi = {Services: {}, Controllers: {}, Routers: {}}));

