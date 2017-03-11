import angular from 'angular';
import angularMeteor from 'angular-meteor';
import template from './view_index.html';

export default angular.module('viewIndex', [
    angularMeteor
])
.component('viewIndex', {
    templateUrl: 'imports/components/view_index/view_index.html',
});
