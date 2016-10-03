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
var yearsApp = angular.module('yearsApp', ['ngSanitize']);

// Giving the module 'yearsApp' a controller named 'YearsListController'
yearsApp.controller('YearsListController', function($scope){
  $scope.yearsList = [
    { text: 'No year selected',
    number: '7'
  },
    { text: 'Year 1 selected', number: 17 },
    { text: 'Year 2 selected' },
    { text: 'Year 3 selected' },
    { text: 'Year 4 selected' },
    { text: 'Year 5 selected' },
  ];

  $scope.currentYear = 1;

  $scope.currentMissionNumber = 0;

  $scope.addMissionGranular = function(){
    for (i = 0; i < $scope.currentMissionList.length; i++){
      //$scope.currentMissionGranularList.push($scope.currentMissionList[i].missionGranular]);
      // $scope.result = $scope.result + i
    }
  };

  $scope.currentMissionList = [];

  $scope.currentMissionGranularList = [];

  $scope.year1MissionList = [
    {
      year: 1,
      mission: "Thin Clients",
      missionGranular: ["test 1", "test 2"],
      missionDetails: "Thin Clients mission details go here."
    },
    {
      year: 1,
      mission: "Analog to Digital Upgrades",
      missionGranular: "Electronic Classrooms<br />Demonstration Classrooms",
      missionDetails: "Analog to Digital Upgrades mission details go here."
    },
    {
      year: 1,
      mission: "Standardization",
      missionGranular: "Open-Access Student Labs<br>Collaboration Spaces<br>Meeting Rooms<br>SCCM Integrations<br>Casper Integration",
      missionDetails: "Standardization mission details go here."
    },
    {
      year: 1,
      mission: "Virtual Computing",
      missionGranular: "Provost Pilot<br>Software Portal<br>Video Playback Enhancements",
      missionDetails: "Virtual Computing mission details go here."
    },
    {
      year: 1,
      mission: "Standardization",
      missionGranular: "Open-Access Student Labs<br>Collaboration Spaces<br>Meeting Rooms<br>SCCM Integrations<br>Casper Integration",
      missionDetails: "Standardization mission details go here."
    }
  ];

  $scope.year2MissionList = [
    {
      year: 2,
      mission: "Mission y2m1",
      missionGranular: "Electronic Classrooms <br> Demonstration Classrooms<br>Technology Commons<br>Health and Human Sciences<br>Forsyth",
      missionDetails: "Thin Clients mission details go here."
    },
    {
      year: 2,
      mission: "Analog to Digital Upgrades",
      missionGranular: "Electronic Classrooms<br>Demonstration Classrooms",
      missionDetails: "Analog to Digital Upgrades mission details go here."
    },
    {
      year: 2,
      mission: "Standardization",
      missionGranular: "Open-Access Student Labs\r\nCollaboration Spaces<br>Meeting Rooms<br>SCCM Integrations<br>Casper Integration",
      missionDetails: "Standardization mission details go here."
    },
    {
      year: 2,
      mission: "Virtual Computing",
      missionGranular: "Provost Pilot<br>Software Portal<br>Video Playback Enhancements",
      missionDetails: "Virtual Computing mission details go here."
    },
    {
      year: 2,
      mission: "Standardization",
      missionGranular: "Open-Access Student Labs<br>Collaboration Spaces<br>Meeting Rooms<br>SCCM Integrations<br>Casper Integration",
      missionDetails: "Standardization mission details go here."
    }
  ]

});
