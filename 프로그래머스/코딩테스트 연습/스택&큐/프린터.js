function solution(priorities, location) {
  let out = 0;

  priorities = priorities.map((el, idx) => {
    if (idx === location) return [el, true];
    return [el, false];
  });

  here: while (1) {
    let compare = priorities.shift();
    for (let i of priorities) {
      if (i[0] > compare[0]) {
        priorities.push(compare);
        continue here;
      }
    }
    if (compare[1] === true) {
      return ++out;
    } else {
      ++out;
    }
  }
}

console.log(solution([2, 1, 3, 2], 2));
// console.log(solution([1, 1, 9, 1, 1, 1], 0));
