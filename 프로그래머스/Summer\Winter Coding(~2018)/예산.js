// d 는 길이가 1이상 100 이하
// 부서별 신청 금액은 1 이상 100,000 이하
// 예산 금액은 1 이상 10,000,000 이하

function solution(d, budget) {
  d.sort((a, b) => a - b);
  let sum = d.reduce((acc, cur) => acc + cur, 0);
  console.log(sum);

  if (sum <= budget) return d.length;
  while (d.length) {
    let last = d.pop();
    console.log(last);
    sum -= last;
    if (sum > budget) {
      continue;
    } else {
      break;
    }
  }

  console.log(d.length);
  return d.length;
}

// console.log(solution([1, 3, 2, 5, 4], 9));
// console.log(solution([2, 2, 3, 3], 10));
console.log(solution([100, 10, 10, 10, 1, 1], 100000000));
