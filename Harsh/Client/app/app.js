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
            .when('/create', {
                templateUrl: 'app/views/create.tmpl.html',
                controller: 'ReservationsController',
                controllerAs: 'reservationsVm'
            })
            .when('/change', {
                templateUrl: 'app/views/change.tmpl.html',
                controller: 'ReservationsController',
                controllerAs: 'reservationsVm'
            })
            .when('/change/:resId', {
                templateUrl: 'app/views/change-result.tmpl.html',
                controller: 'ReservationDetailController',
                controllerAs: 'resDetailVm'
            })
            .when('/reservations/:resId/seating', {
                templateUrl: 'app/views/seating.tmpl.html',
                controller: 'SeatingController',
                controllerAs: 'seatingVm'
            })
            .when('/seating', {
                templateUrl: 'app/views/seating.tmpl.html',
                controller: 'SeatingController',
                controllerAs: 'seatingVm'
            })
            .when('/profile', {
                templateUrl: 'app/views/profile.tmpl.html',
                controller: 'ProfileController',
                controllerAs: 'profileVm'
            })
            .when('/settings', {
                templateUrl: 'app/views/settings.tmpl.html',
                controller: 'SettingsController',
                controllerAs: 'settingsVm'
            })
            .otherwise({
                redirectTo: '/create'
            });
    }
})();