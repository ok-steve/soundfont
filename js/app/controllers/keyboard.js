define([
  'toolbox/utilities/array'
], function (ArrayUtil) {
  'use strict';

  function KeyboardController() {
    // 21-108 is range of standard keyboard in MIDI numbers
    this.keys = ArrayUtil.range(21, 109);
  }

//  KeyboardController.$inject = [];

  return KeyboardController;
});
