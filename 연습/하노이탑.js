// 횟수를 구하려면
function hanoi(n) {
  if (n === 1) return 1;
  return 2 * hanoi(n - 1) + 1
}
// console.log(hanoi(3));

// 옮기는 위치를 구하려면

function hanoi2(n, from, middle, to) {
  if (n === 1) console.log(`${n}을 ${from}에서 ${to}로 이동`);
  else {
    hanoi2(n - 1, from, to, middle);
    console.log(`${n}을 ${from}에서 ${to}로 이동`);
    hanoi2(n - 1, middle, from, to);
  }
}

// hanoi2(4, 'a', 'b', 'c');
