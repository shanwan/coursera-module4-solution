(function () {
    'use strict';

    angular.module('MenuApp')
        .controller('CategoriesController', CategoriesController);

    CategoriesController.$inject = ['MenuDataService', 'items'];
    function CategoriesController(MenuDataService, items) {
        var categoriesCtrl = this;
        console.log('is this in controller?')
        categoriesCtrl.items = items;
    }
})();