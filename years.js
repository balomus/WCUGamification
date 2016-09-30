// angular.module('yearsApp', [])
//   .controller('YearsListController', function() {
//     var yearsList = this;
//     var currentYear = 1;
//
//     yearsList.missions = [{
//       text: 'Year 1 selected'
//     }, {
//       text: 'Year 2 selected'
//     }];
//
//     yearsList.currentYear = function()
//     {
//       return currentYear;
//     };
//
//     yearsList.setYear = function(currentYear)
//     {
//       $scope.currentYear = year;
//     };
//
//   });

// Define the "yearsApp" module
var yearsApp = angular.module('yearsApp', []);

// Giving the module 'yearsApp' a controller named 'YearsListController'
yearsApp.controller('YearsListController', function($scope){
  $scope.yearsList = [
    { text: 'No year selected'},
    { text: 'Year 1 selected' },
    { text: 'Year 2 selected' },
    { text: 'Year 3 selected' },
    { text: 'Year 4 selected' },
    { text: 'Year 5 selected' },
  ];

  $scope.currentYear = 1;

  $scope.missionList = [
    {
      year: 1,
      mission: "Thin Clients",
      missionGranular: "Electronic Classrooms<br>Demonstration Classrooms<br>Technology Commons<br>Health and Human Sciences<br>Forsyth"
      missionDetails: "Thin Clients mission details go here."
    }
    {
      year: 1,
      mission: "Analog to Digital Upgrades",
      missionGranular: "Electronic Classrooms<br>Demonstration Classrooms"
      missionDetails: "Analog to Digital Upgrades mission details go here."
    }
    {
      year: 1,
      mission: "Standardization",
      missionGranular: "Open-Access Student Labs<br>Collaboration Spaces<br>Meeting Rooms<br>SCCM Integrations<br>Casper Integration"
      missionDetails: "Standardization mission details go here."
    }
    {
      year: 1,
      mission: "Virtual Computing",
      missionGranular: "Provost Pilot<br>Software Portal<br>Video Playback Enhancements"
      missionDetails: "Virtual Computing mission details go here."
    }
    {
      year: 1,
      mission: "Standardization",
      missionGranular: "Open-Access Student Labs<br>Collaboration Spaces<br>Meeting Rooms<br>SCCM Integrations<br>Casper Integration"
      missionDetails: "Standardization mission details go here."
    }
  ];
});
