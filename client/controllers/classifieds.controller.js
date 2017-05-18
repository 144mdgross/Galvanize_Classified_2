(function() {
  'use strict'

angular
  .module('app')
  .component('classifieds', {
    controller: controller,
    templateUrl: `/templates/classifieds.template.html`
      })

  controller.$inject = ['$state', '$stateParams', '$scope', '$http', 'PostService']

    function controller($state, $stateParams, $scope, $http) {
      const vm = this

      vm.$onInit = onInit

      function onInit() {
        $http.get('/classifieds')
          .then(res => {
            vm.posts = res.data
          })
      }
    } // /end of controller


})()
