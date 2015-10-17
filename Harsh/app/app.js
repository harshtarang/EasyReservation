(function() {
    'use strict';

    angular
        .module('app', ['ngRoute'])
        .config(moduleConfig);

    moduleConfig.$inject = ['$routeProvider'];

    function moduleConfig ($routeProvider) {

        $routeProvider
            .when('/reservations', {
                templateUrl: 'app/views/reservations.tmpl.html',
                controller: 'ReservationsController',
                controllerAs: 'reservationsVm'
            })
            .when('/reservations/:resId', {
                templateUrl: 'app/views/reservation-detail.tmpl.html',
                controller: 'ReservationDetailController',
                controllerAs: 'resDetailVm'
            })
            .when('/seating', {
                templateUrl: 'pictures.tmpl.html',
                controller: 'PicturesController',
                controllerAs: 'picturesVm'
            })
            .otherwise({
                redirectTo: '/reservations'
            });
    }
})();