function solution(n, edge) {
  var answer = 0;
  roads = {};

  for (let road of edge) {
    if (roads.hasOwnProperty(road[0])) {
      roads[road[0]].push(road[1]);
    } else {
      roads[road[0]] = [road[1]];
    }

    if (roads.hasOwnProperty(road[1])) {
      roads[road[1]].push(road[0]);
    } else {
      roads[road[1]] = [road[0]];
    }
  }
  console.log(roads);

  const start = 1;
  let result = [];
  for (i = 2; i < n; i++) {
    let destination = i;
  }

  return answer;
}

solution(6, [
  [3, 6],
  [4, 3],
  [3, 2],
  [1, 3],
  [1, 2],
  [2, 4],
  [5, 2],
]);
