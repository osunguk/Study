function solution(n, info) {
  let answer = { score: 0, record: [] };

  const recursion = (n, score, index, cur) => {
    if (info.length - 1 <= index) {
      if (n === 0 && answer.score < score) {
        // 최고점을 갱신하면 기존 record 덮어씀
        answer = {
          score,
          record: [cur],
        };
      } else if (n === 0 && answer.score === score) {
        // 최고점과 동점일 경우 저장
        answer = {
          score,
          record: [...answer.record, cur],
        };
      } else if (n !== 0 && answer.score < score) {
        // 화살은 남았지만 최고점일 때
        cur[index] = n;
        answer = {
          score,
          record: [cur],
        };
      }
      return;
    }

    // 그냥 넘어가는
    if (info[index] === 0) {
      recursion(n, score, index + 1, [...cur]);
    } else {
      recursion(n, score - (10 - index), index + 1, [...cur]);
    }

    // 점수 먹고가는
    const scoreable = info[index] + 1;
    if (scoreable <= n) {
      cur[index] = scoreable;
      recursion(n - scoreable, score + (10 - index), index + 1, [...cur]);
    }
  };

  recursion(n, 0, 0, new Array(11).fill(0));

  if (answer.score === 0) return [-1];
  if (answer.record.length === 1) return answer.record[0];
  return answer.record.sort((a, b) => {
    for (i = a.length; i >= 0; i--) {
      if (a[i]) return -1;
      if (b[i]) return 1;
    }
  })[0];
}

// solution(5, [2, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0]);
// solution(1, [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
console.log(solution(9, [0, 0, 1, 2, 0, 1, 1, 1, 1, 1, 1]));
// console.log(solution(10, [0, 0, 0, 0, 0, 0, 0, 0, 3, 4, 3]));
