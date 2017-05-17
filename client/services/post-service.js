(function() {
  'use strict'

  angular
    .module('app')
    .service('Post Service', PostService)

  PostService.$inject = ['$http']

  function PostService($http) {
    const BASE_URL = '/classifieds'

    this.getPosts = function() {
      return $http.get(BASE_URL)
        .then(posts => posts)
    }

    this.getPost = function(id) {
      return $http.get(BASE_URL + '/' + id)
      .then(post => post)
    }

    this.createPost = function(post) {
      return $http.post(BASE_URL, post)
        .then(newPost => newPost)
    }

    this.editPost = function(id, edit) {
      return $http.patch(BASE_URL + '/' + id, edit)
        .then(edited => edited)
    }

    this.delPost = function(id) {
      return $http.delete(BASE_URL + '/' + id)
        .then(del => del)
    }

  }

})()
