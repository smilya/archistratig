'use strict';
import GridformController from './gridform.controller.js';
// @ts-ignore\
angular.module('gridform', [])
    .component('gridform', {
    templateUrl: 'components/gridform/gridform.template.html',
    controller: GridformController,
    bindings: {
        actionType: '@',
        isOpen: '<',
        closeForm: '&',
        initData: '<',
        onSubmit: '&'
    }
});
