(function() {
  'use strict'

console.log('present');

angular
  .module('app')
  .component('classifieds', {
    controller: controller,
    templateUrl: `/templates/classifieds.html`
      })

    function controller() {
      const vm = this


    }


})()
