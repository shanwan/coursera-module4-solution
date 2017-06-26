(function () {
    'use strict';

    angular.module('MenuApp')
        .controller('ItemsInCategoryController', ItemsInCategoryController);

    ItemsInCategoryController.$inject = ['itemsInCategory'];
    function ItemsInCategoryController(itemsInCategory) {
        var itemsInCatgeoryCtrl = this;
        console.log('itemsInCat in controller', itemsInCategory)
        itemsInCatgeoryCtrl.itemsInCategory = itemsInCategory;
    }
})();