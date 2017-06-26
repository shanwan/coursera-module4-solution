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
    }

})();