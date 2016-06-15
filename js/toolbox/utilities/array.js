define([], function () {
  'use strict';

  var ArrayUtil = {
    range: range
  };

  function range(from, to) {
    var i = from,
      rangeArray = [];

    for (i; i < to; i += 1) {
      rangeArray.push(i);
    }

    return rangeArray;
  }

  return ArrayUtil;
});
