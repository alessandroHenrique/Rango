angular.module('starter.controllers', [])

.controller('LoginCtrl', function($http){
  var viewController = this;
  viewController.data = {};

  this.login = function () {
    //TODO
    //$http.post('/url do servidor', viewController.data.username, viewController.data.password)
    //.then(function(){
    //  redirectTo: "Url da página principal";
    //}, function(){
    //      redirectTo: "/login";
    //})
    console.log("Login user: " + viewController.data.username + "- PW: " + viewController.data.password);
  }
})

.controller('CadastroCtrl', function(){
  var viewController = this;
  viewController.data = {};

  this.cadastrar = function () {
    //TODO
    //$http.post('/url do servidor', viewController.data.nome, viewController.data.sobrenome, viewController.data.email, viewController.data.senha)
    //.then(function(){
    //  redirectTo: "/login";
    //}, function(){
    //      redirectTo: "/cadastro";
    //})
  }
});
