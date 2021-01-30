function solution(progresses, speeds) {
  var answer = [];
  console.log(progresses);
  let result = progresses.map((el, idx) => {
    return Math.ceil((100 - el) / speeds[idx]);
  });
  console.log(result);
  let stack = [];
  let top = -1;
  for (let i of result) {
    if (top === -1) {
      stack.push(i);
      top = 0;
    } else if (i <= stack[0]) {
      stack.push(i);
      top++;
    } else if (i > stack[0]) {
      answer.push(stack.length);
      stack = [i];
    }
    console.log(stack);
  }
  answer.push(stack.length);
  console.log(answer);
  return answer;
}

solution([95, 90, 99, 99, 80, 99], [1, 1, 1, 1, 1, 1]);
