/**
 * Created by harsh on 10/16/15.
 */
(function()
{
    'use strict';

    angular
        .module('app')
        .service('profileService',profileService);

    profileService.$inject = ['$q','$http'];

    function profileService($q,$http)
    {
        var self=this;

        self.getProfile=getProfile;


        function getProfile()
        {
            var defer=$q.defer();

            $http
                .get('http://localhost:8080/RestReservation/api/profile')
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