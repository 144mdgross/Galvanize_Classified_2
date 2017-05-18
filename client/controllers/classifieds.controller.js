(function() {
  'use strict'

console.log('present');

angular
  .module('app')
  .component('classifieds', {
    controller: controller,
    templateUrl: `/templates/classifieds.html`
      })

  controller.$inject = ['$state', '$stateParams', '$scope', '$http', 'PostService']

    function controller($state, $stateParams, $scope, $http) {
      const vm = this

      vm.$onInit = onInit

      function onInit() {
        $http.get('/classifieds')
          .then(res => {
            console.log(res.data);
            vm.posts = res.data
          })

        // PostService.getPosts()
        //   .then(posts => {
        //     console.log('in the then');
        //     vm.posts = posts
        //     console.log(vm.posts);
        //   })
      }


    } // /end of controller


})()
