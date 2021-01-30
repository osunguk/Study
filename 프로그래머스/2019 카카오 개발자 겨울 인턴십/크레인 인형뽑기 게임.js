let board = [[0, 0, 0, 0, 0], [0, 0, 1, 0, 3], [0, 2, 5, 0, 1], [4, 2, 4, 4, 2], [3, 5, 1, 3, 1]]
let move = [1, 5, 3, 5, 1, 2, 1, 4]

function solution(board, moves) {
  var answer = 0;
  let binArr = [];
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (i === 0) {
        binArr[j] = [board[i][j]];
        continue;
      }
      binArr[j].push(board[i][j]);
    }
  }
  console.log(binArr);

  let queue = [];
  for (let m of moves) {
    let temp = binArr[m - 1].shift();
    while(temp === 0) {
      temp = binArr[m - 1].shift();
    }
    if (temp === undefined) {
      continue;
    }
    if (queue[queue.length - 1] === temp) {
      queue.pop();
      answer += 2;
    } else {
      queue.push(temp);
    }

  }
  return answer;
}

console.log(solution(board, move)); // 4
