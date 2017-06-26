(function () {
  'use strict';

  angular.module('MenuApp')
    .component('itemsInCategory', {
      templateUrl: 'itemscomponent.template.html',
      bindings: {
        itemsInCategory: '<'
      }
    });
})();