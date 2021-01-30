function solution(stones, k) {
  let result = 1;
  let cnt = 0;
  while (true) {
    for (let i = 0; i < stones.length; i++) {
      stones[i] = stones[i] - 1;
      if (stones[i] > 0) {
        cnt = 0;
      } else {
        cnt++;
      }
      if (cnt >= k) break;
    }
    if (cnt >= k) return result;
    result++;
  }
}


console.log(solution([2, 4, 5, 3, 2, 1, 4, 2, 5, 1],3));