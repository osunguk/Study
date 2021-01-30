function solution(n) {
  console.log(n);

  let compare = 1;
  let result = 1;

  while (1) {
    if (n > compare) {
      compare *= 2;
    }
    if (n === compare) {
      return result;
    }
    if (n < compare) {
      n -= compare / 2;
      compare = 1;
      result++;
    }
  }
}

console.log(solution(5000));

function solution2(n) {
  let result = 0;

  let jegwi = function (n) {
    result++;
    if (n === 1) {
      return;
    }
    let num = 1;
    while (n > num) {
      num *= 2;
    }
    if (n === num) {
      return;
    }
    num /= 2;
    n -= num;
    jegwi(n);
  };
  jegwi(n);
  return result;
}

console.log(solution2(5000));
