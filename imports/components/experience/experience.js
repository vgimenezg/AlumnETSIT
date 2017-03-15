import angular from 'angular';
import angularMeteor from 'angular-meteor';
import template from './experience.html';
import './experience.css'

export default angular.module('experience', [angularMeteor])
    .component('experience', { templateUrl: 'imports/components/experience/experience.html',
})
    .controller("AliasCtrl", AliasCtrl)
    .controller("SwitchCtrl", SwitchCtrl)
    .controller("DatepickerCtrl",DatepickerCtrl)
    .controller("TecnhologyCtrl",TecnhologyCtrl)
    .controller('ProfileCtrl', ProfileCtrl)
    .controller('AliasCtrl', AliasCtrl);     


function AliasCtrl($scope, $mdToast) {
    
  var info = 'Para gestionar más fácilmente tus experiencias, añade un alias. Sólo tú podrás verlo'   
  $scope.icon = 'info';
  
    $scope.openToast = function($event) {
        //$mdToast.show($mdToast.simple().textContent(info));
        $mdToast.showSimple(info);
  };
}

function SwitchCtrl($scope) {
    $scope.data = {
        privacidad: 'Visible',
    };
    $scope.message = 'Oculto';
    $scope.onChange = function(state) {
      if (state) {
          $scope.message = 'Visible';
      }else {
          $scope.message = 'Oculto';
      }
    }
}

function DatepickerCtrl($scope) {
    $scope.myDate = new Date();
    $scope.maxDate = new Date();
}

function TecnhologyCtrl($scope, $element) {
    /*Sustituir por listado de tecnologias recogido de BBDD*/
    $scope.technologies = ['Php' ,'JavaScript' ,'Java' ,'MongoDB' ,'MySql', 'Go', 'HTML', 'Ada'];
    $scope.searchTerm;
    $scope.clearSearchTerm = function() {
        $scope.searchTerm = '';
    };
    $element.find('input').on('keydown', function(ev) {
          ev.stopPropagation();
    });
}

 function ProfileCtrl ($timeout, $q) {
    var self = this;

    // list of `profile` value/display objects
    self.profiles      = loadAll();
    self.selectedItem  = null;
    self.searchText    = null;
    self.querySearch   = querySearch;

    // ******************************
    // Internal methods
    // ******************************

    /**
     * Search for profiles... use $timeout to simulate
     * remote dataservice call.
     */
    function querySearch (query) {
      var results = query ? self.profiles.filter( createFilterFor(query) ) : self.profiles;
      var deferred = $q.defer();
      $timeout(function () { deferred.resolve( results ); }, Math.random() * 1000, false);
      return deferred.promise;
    }

    /**
     * Build `profiles` list of key/value pairs
     */
    function loadAll() {
      var allProfiles = 'programador, analista programador, analista, Desarrollador Web, Consultor, técnico de sistemas, administrador, jefe de proyecto, soporte técnico, arquitecto TIC, redes, técnico software, helpdesk, técnico de bases de datos, tester, operador, seguridad, diseño, comercial, técnico hardware, técnico de mantenimiento, técnico de gestión, sistemas de calidad, I+D, administrativo, SEO/posicionamiento web, migración de datos, formador, auditor, reclutador';

      return allProfiles.split(/, +/g).map( function (profile) {
        return {
          value: profile.toLowerCase(),
          display: profile
        };
      });
    }

    /**
     * Create filter function for a query string
     */
    function createFilterFor(query) {
      var lowercaseQuery = angular.lowercase(query);

      return function filterFn(profile) {
        return (profile.value.indexOf(lowercaseQuery) === 0);
      };

    }
  }