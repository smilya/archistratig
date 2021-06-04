'use strict'

import SidebarController from './sidebar.controller.js'
import sidebarFilter from './sidebar.filter.js';

// @ts-ignore\
angular.module('sidebar', [])
.component('sidebar', {
  templateUrl: 'components/sidebar/sidebar.template.html',
  controller: SidebarController,
  bindings: {
    isOpen: "<"
  }
}).filter('searchFilter', sidebarFilter)

// @ts-ignore\
angular.module('sidebar').directive('menuLength', function() {
  return {
    template: 'menu length: {{$ctrl.menu.length}}',
  }
})