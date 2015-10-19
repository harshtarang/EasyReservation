/**
 * Created by harsh on 10/16/15.
 */

(function()
{
    'use strict';

    angular
        .module('app')
        .controller('ReservationDetailController',ReservationDetailController);

    ReservationDetailController.$inject = ['reservationService','$routeParams'];

    function ReservationDetailController (reservationService,$routeParams)
    {
        var resDetailVm=this;
        resDetailVm.reservation=null;
        resDetailVm.updateRes=updateRes;

        init();

        function init()
        {
            reservationService.getReservationById($routeParams.resId)
                .then(function(reservation){
                    resDetailVm.reservation=reservation;
                }, function (error) {
                    console.log(error);
                });
        }

        function updateRes(reservation)
        {


            reservationService.updateReservation($routeParams.resId,reservation)
                .then(function(reservation){
                    resDetailVm.reservation=reservation;
                    console.log("reservation updated");
                }, function (error) {
                    console.log(error);
                });
        }
    }
})();