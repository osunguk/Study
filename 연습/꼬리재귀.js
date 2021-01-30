// 일반적인 펙토리얼 재귀함수
function factorial(n) {
  if (n === 1) return n;
  return n * factorial(n - 1);
}

console.log(factorial(5));



// 꼬리재귀로 구현한다면
function factorial2(n, acc) {
  if (n === 1) return acc;
  return factorial2(n - 1, acc * n);
}

console.log(factorial2(5,1));