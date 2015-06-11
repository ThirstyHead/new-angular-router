angular.module('app', ['ngNewRouter', 'app.home', 'app.detail'])
  .controller('AppController', ['$router', AppController]);

function AppController ($router) {
    $router.config([
      {path: '/', component: 'home' },
      { path: '/detail/:id', component: 'detail' }
    ]);
}
