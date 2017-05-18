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
      // $scope.options = ['-created_at', 'lowest price', 'highest price']
      // $scope.selected = '-created_at'
      // $scope.change = change

      function onInit() {
        $http.get('/classifieds')
          .then(res => {
            vm.posts = res.data
          })
      }

      // function change() {
      //   vm.selected === '-created_at' || vm.selected === 'most recent' ? vm.selected = '-created_at' : vm.selected === 'lowest price' ? vm.selected = '-price' : vm.selected = 'price'
      // }

    } // end of controller


})()
