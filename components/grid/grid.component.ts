'use strict'

import GridController from './grid.controller.js'

// @ts-ignore\
angular.module('grid', [])
.component('grid', {
  templateUrl: 'components/grid/grid.template.html',
  controller: GridController,
  bindings: {
    data: '=',
    onAdd: '&',
    onEdit: '&',
    onDelete: '&',
  }
})
