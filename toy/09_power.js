function power(base, exponent) {
  // todo: 여기에 코드를 작성합니다.
  let result = 1;
  while (exponent--) {
    result *= base;
    if (result > 1000000009) result %= 1000000009;
  }
  console.log(result);

  return result;
}

console.log(power(3, 40));

function power2(base, exponent) {
  // todo: 여기에 코드를 작성합니다.
  let result = 1;
  let rest = 1;
  while (exponent !== 1) {
    console.log(exponent);
    if (exponent % 2 === 1) {
      // 지수가 홀수인 경우 짝수로 만들어 주는 곳
      rest *= base; // 홀수 지수에서 떨어져나온 녀석 처리하는
      rest %= 94_906_249;
      exponent--;
    }
    base = base * base;
    base %= 94_906_249; // 연산할 때 마다 나머지 연산
    exponent = parseInt(exponent / 2);
  }
  result = (base * rest) % 94_906_249; // 최종 결과값 만들기
  return result;
}
console.log(power2(3, 40));

console.log(Math.pow(3, 40) % 94_906_249);

function power3(base, exponent) {
  if (exponent === 1) return base;

  let halfExponent = parseInt(exponent / 2);
  let half = power3(base, halfExponent);
  let result = (half * half) % 1000000009;

  if (exponent % 2 === 1) return (result * base) % 1000000009;
  return result;
}

console.log(power3(3, 40));
