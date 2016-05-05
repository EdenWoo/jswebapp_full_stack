'use strict';

angular.module('jsWebAppApp.auth', [
  'jsWebAppApp.constants',
  'jsWebAppApp.util',
  'ngCookies',
  'ui.router'
])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
