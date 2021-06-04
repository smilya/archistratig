'use strict';

import HeaderController from './header.controller';

describe('header module', function() {
  var controller;
  beforeEach(function(){
    controller = new HeaderController();
  });

  describe('header controller', function(){

    it('should ....', function() {
      expect(controller.headerTitle).toBe('Home');
    });

  });
});