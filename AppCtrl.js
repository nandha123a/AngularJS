angular.module('dialogDemo1', ['ngMaterial'])
.controller('AppCtrl', function($scope, $mdDialog) {
  $scope.status = '  ';
  $scope.customFullscreen = false;
 $scope.showPopUp = function(ev) {
    $mdDialog.show({
      //templateUrl: 'popup.html',
      template:'<div layout="column" layout-align="space-between center"><md-button ng-click="">All Invetments</md-button><md-button ng-click="">TIAA Invetments Only</md-button></div>',
      parent: angular.element(document.body),
      clickOutsideToClose:true,
    }) 
  };
});