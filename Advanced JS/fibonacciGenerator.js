function fibonacciGenerator(n) {
  var output = [0, 1];

  for (var i = 2; i < n; i++) {
    output.push(output[output.length - 2] + output[output.length - 1]);
  }
  console.log(output);
}

fibonacciGenerator(15);
