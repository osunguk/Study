let path = [
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
];
let count = 0;
function recursion(i, j) {
  if (i === 3 && j === 3) {
    // 재귀가 탈출하는곳
    count++;
    return;
  }
  togglePiece(i, j); // 이곳에서 path[0][0]을 1로 바꿔줌
  if (i <= 2 && path[i + 1][j] === 0) {
    //1번부분
    recursion(i + 1, j);
  }
  if (j <= 2 && path[i][j + 1] === 0) {
    // 2번부분
    recursion(i, j + 1);
  }
  if (i >= 1 && path[i - 1][j] === 0) {
    // 3번부분
    recursion(i - 1, j);
  }
  if (j >= 1 && path[i][j - 1] === 0) {
    //4번 부분
    recursion(i, j - 1);
  }
  togglePiece(i, j); // 5번부분 (토글한걸 다시 한번 토글해서 초기화 시켜준다고 하는데 이해가 안 감)
}
function togglePiece(i, j) {
  path[i][j] = path[i][j] === 0 ? 1 : 0;
}
recursion(0, 0);
console.log(count);
