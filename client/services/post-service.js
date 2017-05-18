(function() {
  'use strict'

  angular
    .module('app')
    .service('PostService', PostService)

  function PostService($http) {
    const BASE_URL = '/'

    this.getPosts = function() {
      return $http.get('/classifieds')
        .then(posts => {
          return posts.data
        })
    }

    this.getPost = function(id) {
      return $http.get(BASE_URL + '/' + id)
      .then(post => post.data)
    }

    this.createPost = function(post) {
      return $http.post(BASE_URL, post)
        .then(newPost => newPost.data)
    }

    this.editPost = function(id, edit) {
      return $http.patch(BASE_URL + '/' + id, edit)
        .then(edited => edited.data)
    }

    this.delPost = function(id) {
      return $http.delete(BASE_URL + '/' + id)
        .then(del => del)
    }

  }

PostService.$inject = ['$http']

})()
