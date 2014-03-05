

var fib = function() {
  var total = 0;
  var second = 1;
  var first = 1;
  while (second < 4000000) {
    var sum = second + first;
    if (sum % 2 === 0) {
      total = total + sum;
      // console.log(total)
    };
    first = second;
    second = sum;
  };
  return(total);
};
