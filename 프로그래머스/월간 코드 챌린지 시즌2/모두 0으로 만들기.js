function solution(a, edges) {
  let minus = 0;
  const totalSumArray = (arr) => {
    return arr.reduce((acc, cur) => {
      if (acc < 0) minus = minus;
      return acc + cur;
    }, 0);
  };
  if (totalSumArray(a) !== 0) return -1;

  const calculateRoute = (edges) => {
    let count = a.length;
    const result = [];
    while (count > 0) {
      result[count - 1] = [];
      count = count - 1;
    }

    edges.forEach((edge) => {
      result[edge[0]].push(edge[1]);
      result[edge[1]].push(edge[0]);
    });
    return result;
  };

  const route = calculateRoute(edges);

  const path = [[0, -1]];
  const visit = new Array(a.length).fill(false);
  let countMove = 0n;

  while (path.length) {
    const [current, parent] = path.pop();

    if (visit[current]) {
      a[parent] = a[parent] + a[current];
      countMove = countMove + BigInt(Math.abs(a[current]));
      continue;
    } else {
      visit[current] = true;
      path.push([current, parent]);
    }

    route[current].forEach((goto) => {
      if (!visit[goto]) path.push([goto, current]);
    });
  }

  return countMove;
}

solution(
  [-5, 0, 2, 1, 2],
  [
    [0, 1],
    [3, 4],
    [2, 3],
    [0, 3],
  ]
);
