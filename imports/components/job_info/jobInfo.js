import angular from 'angular';
import angularMeteor from 'angular-meteor';
import InfoRequestCtrl from './info_request/infoRequest';
import InfoDetailsCtrl from './info_details/infoDetails';
import InterchangeAreaCtrl from "./interchange_area/interchangeArea";
import AcquiredInfoCtrl from './acquired_info/acquiredInfo';
import PendingRequestsCtrl from "./pending_requests/pendingRequests";

export default angular.module('jobInfo', [
    angularMeteor
]).component('infoRequest', {
    templateUrl: 'imports/components/job_info/info_request/info_request.html',
    controller: ['$scope','$mdDialog', '$window', InfoRequestCtrl]
}).component('interchangeArea', {
    templateUrl: 'imports/components/job_info/interchange_area/interchange_area.html',
    controller: ['$scope', InterchangeAreaCtrl]
}).component('acquiredInfo', {
    templateUrl: 'imports/components/job_info/acquired_info/acquired_info.html',
    controller: ['$scope', AcquiredInfoCtrl]
}).component('pendingRequests', {
    templateUrl: 'imports/components/job_info/pending_requests/pending_requests.html',
    controller: ['$scope', PendingRequestsCtrl]
}).component('infoDetails', {
    templateUrl: 'imports/components/job_info/info_details/info_details.html',
    controller: ['$scope', InfoDetailsCtrl]
});
