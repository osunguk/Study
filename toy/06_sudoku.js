let board = [
  [0, 3, 0, 2, 6, 0, 7, 0, 1],
  [6, 8, 0, 0, 7, 0, 0, 9, 0],
  [1, 9, 0, 0, 0, 4, 5, 0, 0],
  [8, 2, 0, 1, 0, 0, 0, 4, 0],
  [0, 0, 4, 6, 0, 2, 9, 0, 0],
  [0, 5, 0, 0, 0, 3, 0, 2, 8],
  [0, 0, 9, 3, 0, 0, 0, 7, 4],
  [0, 4, 0, 0, 5, 0, 0, 3, 6],
  [7, 0, 3, 0, 1, 8, 0, 0, 0],
];

let board2 = [
  [0, 0, 0, 0, 0, 0, 0, 7, 0],
  [0, 7, 0, 0, 1, 0, 5, 9, 0],
  [0, 8, 9, 3, 0, 2, 0, 1, 6],
  [6, 5, 0, 4, 0, 9, 0, 0, 3],
  [0, 0, 4, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 7, 6, 0, 0, 0, 0],
  [9, 1, 0, 6, 0, 0, 0, 0, 0],
  [0, 2, 7, 9, 0, 0, 0, 4, 0],
  [4, 0, 5, 1, 0, 0, 0, 0, 0],
];

// 객체의 key 값은 row * 9 + col

const sudoku = function (board) {
  // TODO: 여기에 코드를 작성합니다.
  const position = [
    [[], [], [], [], [], [], [], [], []],
    [[], [], [], [], [], [], [], [], []],
    [[], [], [], [], [], [], [], [], []],
    [[], [], [], [], [], [], [], [], []],
    [[], [], [], [], [], [], [], [], []],
    [[], [], [], [], [], [], [], [], []],
    [[], [], [], [], [], [], [], [], []],
    [[], [], [], [], [], [], [], [], []],
    [[], [], [], [], [], [], [], [], []],
  ];
  const setting = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  for (let i = 0; i < 9; i++) {
    // 후보들 넣어주는 작업
    for (let j = 0; j < 9; j++) {
      if (board[i][j] === 0) {
        position[i][j] = [...setting];
      } else {
        position[i][j] = "값이 있음";
      }
    }
  }
  let check = function () {
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        if (board[i][j] !== 0) {
          let num = board[i][j];
          for (let row = 0; row < 9; row++) {
            if (Array.isArray(position[row][j])) {
              let temp = position[row][j].indexOf(num);
              if (temp !== -1) {
                position[row][j].splice(temp, 1);
              }
            }
          }
          for (let col = 0; col < 9; col++) {
            if (Array.isArray(position[i][col])) {
              let temp = position[i][col].indexOf(num);
              if (temp !== -1) {
                position[i][col].splice(temp, 1);
              }
            }
          }
        }
      }
    }
  };

  let decision = function () {
    for (let i = 0; i < 9; i++) {
      // 결정 가능한 요소 넣기
      for (let j = 0; j < 9; j++) {
        if (position[i][j].length === 1) {
          board[i][j] = position[i][j][0];
          position[i][j] = "값이 있음";
        }
      }
    }
  };
  let loop = function () {
    let compare = JSON.stringify(position);
    check();
    decision();
    check();
    after = JSON.stringify(position);
    while (compare !== after) {
      compare = JSON.stringify(position);
      check();
      decision();
      check();
      after = JSON.stringify(position);
    }
  };

  loop();

  console.log(position);
  return board;
};

sudoku(board2);

const sudoku2 = function (board) {
  let nums = Array(9).fill(true);
  let isFalse = (row, col) => {
    for (let i = 0; i < 9; i++) {
      nums[board[row][i]] = false;
      nums[board[i][col]] = false;
      // 3*3 = false;
    }
  };
  let place = (r, c) => {};
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (board[i][j] === 0) {
      }
    }
  }
};

// console.log(sudoku2(board));
