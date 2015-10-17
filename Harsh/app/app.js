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
            .when('/employees/:employeeId', {
                templateUrl: 'employee-detail.tmpl.html',
                controller: 'EmployeeDetailController',
                controllerAs: 'empDetailVm'
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