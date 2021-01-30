function solution(participant, completion) {
  var answer = "";

  let runner = {};
  for (let start of participant) {
    if (runner.hasOwnProperty(start)) {
      runner[start] += 1;
    } else {
      runner[start] = 1;
    }
  }

  for (let end of completion) {
    runner[end] -= 1;
    if (runner[end] === 0) {
      delete runner[end];
    }
  }

  return answer;
}

solution(
  ["marina", "josipa", "nikola", "vinko", "filipa"],
  ["josipa", "filipa", "marina", "nikola"]
);
