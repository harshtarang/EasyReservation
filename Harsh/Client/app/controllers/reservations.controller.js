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
        reservationsVm.reservations=[];
        reservationsVm.newRes=null;
        reservationsVm.addRes=addRes;
        reservationsVm.deleteRes=deleteRes;

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

        function addRes(form)
        {
            reservationsVm.newRes.time= function(dateString)
            {

                //var dateString = '10-03-2015 10:00',
                  var  dateParts = dateString.split(' '),
                    timeParts = dateParts[1].split(':'),
                    date;

               var dateParts = dateParts[0].split('-');
                console.log(dateParts);
                var date = new Date(dateParts[2], parseInt(dateParts[0])-1, dateParts[1], timeParts[0], timeParts[1]);
                console.log(date.getTime());

                return date.getTime();
            }(reservationsVm.newRes.time);

            reservationService.createReservation(reservationsVm.newRes)
                .then(function(res){
                    reservationsVm.reservations.push(res);
                }, function(error) {
                    console.log(error);
                })
        }

        function deleteRes(id)
        {
            console.log("in delete function id="+id);
            reservationService.deleteReservation(id)
                .then(function(){
                    console.log("delete successful");
                    init();
                }, function(error) {
                    console.log(error);
                })
        }
    }
})();