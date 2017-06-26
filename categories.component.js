(function () {
    'use strict';

    angular.module('MenuApp')
        .component('categories', {
            templateUrl: 'categoriescomponent.template.html',
            bindings: {
                items: '<'
            }
        });

})();
