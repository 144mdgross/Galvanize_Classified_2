(function() {
  'use strict'

  console.log('service here');

  angular
    .module('app')
    .service('PostService', PostService)

  function PostService($http) {
    const BASE_URL = '/'
    console.log('inside post service function');

    this.getPosts = function() {
      console.log('insdie getPosts');
      return $http.get('/classifieds')
        .then(posts => {
          console.log('posts', posts);
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
