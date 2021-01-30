function fibonacci(n) {
  let memo = {};

  let fibo = function (n) {
    if (memo[n]) return memo[n];

    if (n < 2) {
      memo[n] = n;
      return memo[n];
    }
    memo[n] = fibo(n - 2) + fibo(n - 1);
    return memo[n];
  };

  fibo(n);
  console.log(memo);

  return memo[n];
}

console.log(fibonacci(9));
