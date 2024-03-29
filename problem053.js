// Generated by CoffeeScript 1.4.0
(function() {
  var cnr, factorial, factorials, n, r, sum, x, _i, _j;

  factorial = function(n) {
    if (n === 0) {
      return 1;
    } else {
      return n * factorial(n - 1);
    }
  };

  factorials = (function() {
    var _i, _results;
    _results = [];
    for (x = _i = 0; _i <= 100; x = ++_i) {
      _results.push(factorial(x));
    }
    return _results;
  })();

  cnr = function(n, r) {
    return factorials[n] / (factorials[r] * factorials[n - r]);
  };

  sum = 0;

  for (n = _i = 1; _i <= 100; n = ++_i) {
    for (r = _j = 1; 1 <= n ? _j <= n : _j >= n; r = 1 <= n ? ++_j : --_j) {
      if (cnr(n, r) > 1000000) {
        sum++;
      }
    }
  }

  console.log(sum);

}).call(this);
