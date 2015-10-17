/**
 * Created by harsh on 10/16/15.
 */

(function()
{
    'use strict';

    angular
        .module('app')
        .controller('ReservationsController',ReservationsController);

    ReservationsController.$inject = ['reservationService'];

    function ReservationsController (reservationService)
    {
        var reservationsVm=this;

        init();

        function init()
        {
            reservationService.getReservations()
                .then(function(reservations){
                    reservationsVm.reservations=reservations;
                }, function (error) {
                    console.log(error);
                });
        }
    }
})();