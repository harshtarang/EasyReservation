/**
 * Created by harsh on 10/18/15.
 */

(function()
{
    'use strict';

    angular
        .module('app')
        .controller('SeatingController',SeatingController);

    SeatingController.$inject = ['seatingService','$routeParams','reservationService'];

    function SeatingController (seatingService,$routeParams,reservationService)
    {
        var seatingVm=this;
        seatingVm.tables=[];
        seatingVm.assignTable=assignTable;
        init();

        function init()
        {
            seatingService.getSeating()
                .then(function(tables){
                    seatingVm.tables=tables;
                }, function (error) {
                    console.log(error);
                });
        }


        function assignTable(tableId)
        {

            reservationService.getReservationById($routeParams.resId)
                .then(function(reservation){
                    resDetailVm.reservation.waitStatus=false;
                    resDetailVm.reservation.tableId=tableId;

                }, function(error){
                    console.log("error while fetching reservation by id");
                    console.log(error);
                });
            seatingService.getTableById(tableId)
                .then(function(table){
                    console.log(table);
                 }, function(error){
                      console.log("error while fetching table by id");
                      console.log(error);
                 });



            reservationService.updateReservation(resDetailVm.reservation.id,resDetailVm.reservation)
                .then(function(res){
                    console.log("assigning table successful");
                    console.log(res);

            }, function(error) {
                    console.log(error);
                });


        }
    }
})();