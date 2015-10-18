/**
 * Created by harsh on 10/17/15.
 */
(function()
{
    'use strict';

    angular
        .module('app')
        .controller('ProfileController',ProfileController);

    ProfileController.$inject = ['profileService'];

    function ProfileController (profileService)
    {
        var profileVm=this;

        init();

        function init()
        {
            profileService.getProfile()
                .then(function(profile){
                    profileVm.profile=profile;
                }, function (error) {
                    console.log(error);
                });
        }
    }
})();