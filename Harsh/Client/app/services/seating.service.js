/**
 * Created by harsh on 10/18/15.
 */

(function()
{
    'use strict';

    angular
        .module('app')
        .service('seatingService',seatingService);

    seatingService.$inject = ['$q','$http'];

    function seatingService($q,$http)
    {
        var self=this;

        self.getSeating=getSeating;
        self.getTableById=getTableById;


        function getSeating()
        {
            var defer=$q.defer();

            $http
                .get('http://localhost:8080/RestReservation/api/seating')
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

        function getTableById(id)
        {
            var defer=$q.defer();

            $http
                .get('http://localhost:8080/RestReservation/api/seating/'+id)
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