const largestProductOfThree = function (arr) {
  // TODO: 여기에 코드를 작성합니다.
  if (arr.length === 3) return arr.reduce((acc, cur) => acc * cur, 1); // 요소가 3개 뿐이면
  const includeZero = arr.includes(0);
  const pos = [];
  const nag = [];
  arr.sort((a, b) => Math.abs(a) - Math.abs(b));

  arr.forEach((el) => {
    if (el < 0) nag.push(el);
    if (el > 0) pos.push(el);
  });

  if (pos.length === 0) {
    // 리스트가 전부 음수 일 경우
    if (includeZero) return 0; // 0 이 있다면 0이 제일 크다.
    return nag[0] * nag[1] * nag[2];
  }
  if (nag.length === 0 || nag.length === 1) {
    // 리스트가 전부 양수 일 경우 or 음수가 1개인 경우
    return pos.pop() * pos.pop() * pos.pop();
  }
  if (pos.length === 1) {
    // 양수가 하나일 경우
    return pos.pop() * nag.pop() * nag.pop();
  }
  if (nag.length >= 2) {
    // 음수가 2개 이상일 경우
    if (pos.length < 3) {
      // 양수가 2개 이하일 경우
      return nag.pop() * nag.pop() * pos.pop();
    }
    let temp1 = nag.pop() * nag.pop() * pos.pop();
    let temp2 = pos.pop() * pos.pop() * pos.pop();
    return Math.max(temp1, temp2);
  }
};

// console.log(largestProductOfThree([2, 1, 3, 7]));
console.log(largestProductOfThree([-1, -2, 5, 7])); // 14
console.log(largestProductOfThree([-1, 2, -5, 7])); // 35
console.log(largestProductOfThree([-1, 2, 5, -7])); // 35
console.log(largestProductOfThree([1, -2, 5, -7])); // 70
console.log(largestProductOfThree([1, 2, -5, -7])); // 70
console.log(largestProductOfThree([1, -2, -5, -7])); // 35

// console.log(largestProductOfThree([1, 2, 5, -7]));
// console.log(largestProductOfThree([-1, -2, -5, -7]));
// console.log(largestProductOfThree([0, -2, -5, -7]));
