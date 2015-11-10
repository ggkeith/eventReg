'use strict';

eventsApp.controller("EventController",
  function EventController($scope) {
    $scope.event = {
      name: "Angular Boot Camp",
      date: "1/1/2016",
      time: "10:30 am",
      location: {
        address: "3820 American Drive, Suite 110",
        city: "Plano",
        state: "TX"
      },
      imageUrl: "img/angularjs-logo.png",
      sessions: [
        {
          name: "Directives Masterclass"
        },
        {
          name: "Scopes for fun and profit"
        },
        {
          name: "Well Behaved Controllers"
        }
      ]
    }
  }
);
