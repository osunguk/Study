function solution(stones, k) {
  // console.log(stones, k);
  let answer = 0;
  let beforeZero = false;
  let cnt = 5
  let jump = k;
  while(true) {
    // console.log(stones);
    for (let i = 0; i < stones.length; i++) {
      let cur = stones[i];
      if (beforeZero) { // 앞에꺼가 0 일때
        if (cur === 0) { // 앞에도 0 다음꺼도 0
          jump--;
        } else { // 앞에 0 다음껀 아닐때
          beforeZero = false;
          jump = k;
        }
        // console.log(jump);
        if (!jump) return answer;
      } else { // 앞에꺼가 0 이 아닐때
        if (cur === 0) {
          beforeZero = true;
          jump--;
        }
      }
      if (cur > 0) {
        stones[i] = cur - 1;
      }
    }
    answer++;
  }
}
console.log(solution([2, 4, 5, 3, 2, 1, 4, 2, 5, 1], 3));
