define([
], function () {
  'use strict';

  var Util;

  Util = {
    range: function (start, end) {
      var a = [],
        i = start;

      for (i; i <= end; i += 1) {
        a.push(i);
      }

      return a;
    }
  };

  return Util;
});
