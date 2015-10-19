/**
 * Created by harsh on 10/17/15.
 */
/**
 * Created by harsh on 10/16/15.
 */
(function()
{
    'use strict';

    angular
        .module('app')
        .service('settingsService',settingsService);

    settingsService.$inject = ['$q','$http'];

    function settingsService($q,$http)
    {
        var self=this;

        self.getSettings=getSettings;


        function getSettings()
        {
            var defer=$q.defer();

            $http
                .get('http://localhost:8080/RestReservation/api/settings')
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