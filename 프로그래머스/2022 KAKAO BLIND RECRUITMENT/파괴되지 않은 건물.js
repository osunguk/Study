function solution(board, skill) {
  let totalCnt = board.length * board[0].length;

  skill.forEach((el) => {
    const [type, r1, c1, r2, c2, degree] = el;

    for (let i = r1; i <= r2; i++) {
      for (let j = c1; j <= c2; j++) {
        const pre = board[i][j];
        if (type === 1) {
          board[i][j] = board[i][j] - degree;
          if (pre >= 1 && board[i][j] < 1) {
            totalCnt--;
          }
        }
        if (type === 2) {
          board[i][j] = board[i][j] + degree;
          if (pre < 1 && board[i][j] >= 1) {
            console.log(pre, board[i][j]);
            totalCnt++;
          }
        }
      }
    }
  });

  return totalCnt;
}

solution(
  [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ],
  [
    [1, 1, 1, 2, 2, 4],
    [1, 0, 0, 1, 1, 2],
    [2, 2, 0, 2, 0, 100],
  ]
);

[1, 2, 3, 4, 5, 6, 7, 8, 9];

3 * 1 + 1;
// 4
3 * 2 + 2;
// 8
// 4 ~ 8

// 누적합을 이용한 풀이
function solution2(board, skill) {}

solution2(
  [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ],
  [
    [1, 1, 1, 2, 2, 4],
    [1, 0, 0, 1, 1, 2],
    [2, 2, 0, 2, 0, 100],
  ]
);
