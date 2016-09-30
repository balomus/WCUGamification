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
});
