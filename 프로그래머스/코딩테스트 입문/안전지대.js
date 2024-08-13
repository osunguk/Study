function solution(board) {
  const total = board.length * board[0].length
  let mine = 0

  const recur = (i, j, mark, first) => {
    if (i < 0 || i > board.length - 1 || j < 0 || j > board[0].length - 1) {
      return
    }

    if (mark) {
      if (board[i][j] !== 1) {
        board[i][j] = -1
      }
    } else {
      if (board[i][j] === 1) {
        recur(i - 1, j + 1, true)
        recur(i - 1, j, true)
        recur(i - 1, j - 1, true)
        recur(i, j + 1, true)
        recur(i, j - 1, true)
        recur(i + 1, j + 1, true)
        recur(i + 1, j, true)
        recur(i + 1, j - 1, true)
      }
      recur(i + 1, j, false)
      recur(i, j + 1, false)
    }
  }

  recur(0, 0, false, true)

  for (let i of board) {
    for (let j of i) {
      if (j !== 0) mine++
    }
  }

  console.log(total - mine)
  board
  return total - mine
}

solution([
  [1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1],
  [1, 1, 0, 1, 1],
  [1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1],
])
