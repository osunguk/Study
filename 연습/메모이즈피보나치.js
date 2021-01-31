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

// 배열로 메모이즈
function fibonacci(n) {
  let arr = [0, 1]; // 피보나치 수열을 담은 배열
  const fibo = function (n) {
    let result = arr[n]; //배열에 보관해서 꺼내쓰면 매번 call stack을 생성하지 않아서 메모리를 효율적으로 쓸 수 있다.
    if (typeof result !== "number") {
      // 없으면 계산해서 넣어라
      result = fibo(n - 1) + fibo(n - 2);
      arr[n] = result;
    }
    return result;
  };
  return fibo(n);
}
