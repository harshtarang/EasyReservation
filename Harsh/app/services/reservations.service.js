/**
 * Created by harsh on 10/16/15.
 */
(function()
{
    'use strict';

    angular
        .module('app')
        .service('reservationService',reservationService);

    reservationService.$inject = ['$q','$http'];

    function reservationService($q,$http)
    {
        var self=this;

        self.getReservations=getReservations;
        self.getReservationById=getReservationById;

        function getReservations()
        {
            var defer=$q.defer();

            $http
                .get('http://localhost:8080/RestReservation/api/reservations')
                .then(successFn,errorFn);

            function successFn(response)
            {
                defer.resolve(response.data);
            }

            function errorFn(error)
            {
                defer.reject(error.statusText);
            }

            return defer.promise;

        }


        function getReservationById(id)
        {
            var defer=$q.defer();

            $http
                .get('http://localhost:8080/RestReservation/api/reservations/'+id)
                .then(successFn,errorFn);

            function successFn(response)
            {
                defer.resolve(response.data);
            }

            function errorFn(error)
            {
                defer.reject(error.statusText);
            }

            return defer.promise;
        }
    }

})();