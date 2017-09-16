'use strict';

// var someCallback = function(data) {
//   console.log('got some data:', data);
// }

// var useCallback = function(cb) {
//   cb(someCallback);
// }

var someCallback = function(err, data) {
  if (err) throw err;
  console.log('got some data:', data);
}

var useCallback = function(cb) {
  cb(null, 'the data I wanted');
}

useCallback(someCallback);
