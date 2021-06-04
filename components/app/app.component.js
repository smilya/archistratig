'use strict';
import AppController from './app.controller.js';
// Declare app level module which depends on views, and core components
// @ts-ignore\
angular.module('theApp').component('app', {
    templateUrl: 'components/app/app.template.html',
    controller: AppController,
    bindings: {}
});
// @ts-ignore\
angular.module('theApp').directive('showMaxId', function () {
    return {
        template: 'Max ID: {{$ctrl.maxId}}'
    };
});
// @ts-ignore\
angular.module('theApp').directive('showMyVar', function () {
    return {
        template: 'My var here: {{$ctrl.myVar}}'
    };
});
