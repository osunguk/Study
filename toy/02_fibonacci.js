function fibonacci(n) {
  let memo = {};

  let fibo = function (n) {
    if (memo[n]) return memo[n];

    if (n < 2) {
      memo[n] = n;
      return memo[n];
    }
    memo[n] = fibo(n - 2) + fibo(n - 1);
    return memo[n]; // 여기서 왜 리턴을 안해주면 안되는가?
    //  ㅁㄴㅇ
    //
    //
  };

  fibo(n);
  console.log(memo);

  return memo[n];
}

console.log(fibonacci(3));

_.memoize = function (func) {
  // TODO: 여기에 코드를 작성합니다.
  let memo = {};
  return function (...args) {
    // let input = [...args] => args 요소중 주소값을 가지고 있는 친구가 있다면 다른 객체 같은 주소 일수도?
    // if(memo[input] === undefined){ => 해당 키의 값이 undefined 라면? 정확한 동작 X
    let input = JSON.stringify(args); // memo 의 key 값을 유니크하게!
    if (!memo.hasOwnProperty(input)) {
      memo[input] = func(...args);
    }
    return memo[input];
  };
};
