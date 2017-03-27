import angular from 'angular';
import angularMeteor from 'angular-meteor';
import template from './header.html';
import './header.css'

headerController.$inject = ["$scope", "$mdSidenav", "$window"];
export default angular.module('header', [
  angularMeteor
]).component('header', {
    templateUrl: 'imports/components/header/header.html',
}).controller("headerController", headerController);

function getSubtitle() {
    return "";
}

function getTitle() {
    return "ProTIC";
}

function headerController($scope, $mdSidenav, $window) {
    $scope.backIcon = false;
    $scope.menuIcon = true;
    $scope.$on('showBackButtonHeader', function(event, data) { 
        $scope.backIcon = data;
    });
    $scope.$on('showMenuButtonHeader', function(event, data) { 
        $scope.menuIcon = data;
    });
    $scope.title = getTitle();
    $scope.subtitle = getSubtitle();
    $scope.name = "Anónimo";
    $scope.openMenu = function () {
        $mdSidenav("menu-sidenav").toggle();
    }
    $scope.back = function() { 
        window.history.back();
    };
}
