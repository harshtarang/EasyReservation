/**
 * Created by harsh on 10/17/15.
 */
(function()
{
    'use strict';

    angular
        .module('app')
        .controller('SettingsController',SettingsController);

    SettingsController.$inject = ['settingsService'];

    function SettingsController (settingsService)
    {
        var settingsVm=this;

        init();

        function init()
        {
            settingsService.getSettings()
                .then(function(settings){
                    settingsVm.settings=settings;
                }, function (error) {
                    console.log(error);
                });
        }
    }
})();