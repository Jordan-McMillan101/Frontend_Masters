
var funcCaller = function(func, arg) {
  return func(arg);
};

var firstVal = function(arr, func) {
  func(arr[0], 0, arr);
};
