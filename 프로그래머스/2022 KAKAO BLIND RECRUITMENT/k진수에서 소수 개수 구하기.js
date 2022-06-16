function solution(n, k) {
  const isPrimeNumber = (num) => {
    if (num === 1) return false;
    if (num === 2) return true;
    for (let i = 2; i <= Math.floor(Math.sqrt(num)); i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  };

  const trans = n.toString(k);
  const splited = trans.split("0");
  const filtered = splited.filter((el) => {
    if (el) return el;
  });

  const result = filtered.reduce((acc, cur) => {
    if (isPrimeNumber(cur)) {
      return acc + 1;
    }
    return acc;
  }, 0);

  return result;
}

solution(437674, 3);
console.log(solution(437674, 3));

const test = 7;

const temp = test.toString(2);
console.log(temp.split("1"));

console.log(Math.sqrt(12));
