define([
  'app/util'
], function (Util) {
  'use strict';

  function KeyboardController() {
    // 21-108 is range of standard keyboard in MIDI numbers
    this.keys = Util.range(21, 108);
  }

//  KeyboardController.$inject = [];

  return KeyboardController;
});
