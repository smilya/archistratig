'use strict';
import HeaderController from './header.controller.js';
// @ts-ignore\
angular.module('header', [])
    .component('header', {
    templateUrl: 'components/header/header.template.html',
    controller: HeaderController,
    bindings: {
        title: '@',
        onBurgerClick: '&',
        showBurger: '<'
    }
});
