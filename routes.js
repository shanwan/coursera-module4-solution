(function () {
    'use strict';

    angular.module('MenuApp')
        .config(RoutesConfig);

    RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
    function RoutesConfig($stateProvider, $urlRouterProvider) {

        // Redirect to home page if no other URL matches
        $urlRouterProvider.otherwise('/');

        // *** Set up UI states ***
        $stateProvider

            // Home page
            .state('home', {
                url: '/',
                templateUrl: 'home.template.html'
            })

            // Categories page
            .state('categories', {
                url: '/categories',
                // abstract: true,
                templateUrl: 'categories.template.html',
                controller: 'CategoriesController as categoriesCtrl',
                resolve: {
                    items: ['MenuDataService', function (MenuDataService) {
                        return MenuDataService.getAllCategories().then(function (response) {
                            return response.data;
                        });
                    }]
                }
            })

            // Items page
            .state('items', {
                url: '/{categoryShortName}',
                parent: 'categories',
                templateUrl: 'items.template.html',
                controller: 'ItemsInCategoryController as itemsInCategoryCtrl',
                onEnter: function () {
                    console.log("enter categories.items");
                },
                resolve: {
                    itemsInCategory: ['MenuDataService', '$stateParams', function (MenuDataService, $stateParams) {
                        return MenuDataService.getItemsForCategory($stateParams.categoryShortName).then(function (response) {
                            console.log('routes', response.data.menu_items)
                            return response.data.menu_items;
                        });
                    }]
                }
            })
    }

})();