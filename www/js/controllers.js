angular.module('starter.controllers', ['ionic'])

.controller('DashCtrl', function($scope) {})

.controller('ScheduleCtrl', function($scope, Entries) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.entries = Entries.all();
  $scope.remove = function(entry) {
    Entries.remove(entry);
  };

  $scope.newEntry = function() {
  }
})

.controller('EntryCtrl', function($scope) {})

.controller('EntryDetailCtrl', function($scope, $stateParams, Entries) {
  $scope.entry = Entries.get($stateParams.entryID);
})

.controller('SettingsCtrl', function($scope) {
  $scope.settings = {
    toggleLED: false
  };

  $scope.choice = {
    value: "A"
  };

  $scope.options = {
    value: "3min"
  };

});
