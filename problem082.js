// Generated by CoffeeScript 1.4.0
(function() {
  var matrix, radek, sloupec, _i, _j, _ref, _ref1;

  matrix = [[131, 673, 234, 103, 18], [201, 96, 342, 965, 150], [630, 803, 746, 422, 111], [537, 699, 497, 121, 956], [805, 732, 524, 37, 331]];

  for (sloupec = _i = 1, _ref = matrix.length; 1 <= _ref ? _i < _ref : _i > _ref; sloupec = 1 <= _ref ? ++_i : --_i) {
    for (radek = _j = 0, _ref1 = matrix.length; 0 <= _ref1 ? _j < _ref1 : _j > _ref1; radek = 0 <= _ref1 ? ++_j : --_j) {
      matrix[radek][sloupec] += matrix[radek][sloupec - 1];
    }
  }

  console.log(matrix);

}).call(this);
