function solution(info, edges) {
  const dic = {};

  edges.forEach((el) => {
    const [parentNode, chilNode] = el;

    if (!dic[parentNode]) {
      dic[parentNode] = {
        species: info[parentNode] ? "wolf" : "sheep",
        chilNode: [chilNode],
      };
    } else {
      dic[parentNode].chilNode.push(chilNode);
    }
  });

  info.forEach((el, index) => {
    if (!dic[index]) {
      dic[index] = {
        species: el ? "wolf" : "sheep",
        chilNode: [],
      };
    }
  });

  let max = 0;

  const recursion = (sheepCount, wolfCount, position, canGo) => {
    if (max < sheepCount) {
      max = sheepCount;
    }
    if (sheepCount === wolfCount || canGo.length === 0) {
      return;
    }

    const idx = canGo.indexOf(position);
    if (idx !== -1) canGo.splice(idx, 1);

    canGo.forEach((el) => {
      switch (dic[el].species) {
        case "wolf":
          recursion(sheepCount, wolfCount + 1, el, [
            ...canGo,
            ...dic[el].chilNode,
          ]);
          break;
        case "sheep":
          recursion(sheepCount + 1, wolfCount, el, [
            ...canGo,
            ...dic[el].chilNode,
          ]);
          break;
        default:
          break;
      }
    });
  };

  const START_POSITION = 0;

  recursion(1, 0, START_POSITION, dic[START_POSITION].chilNode);
  return max;
}

// solution(
//   [0, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1],
//   [
//     [0, 1],
//     [1, 2],
//     [1, 4],
//     [0, 8],
//     [8, 7],
//     [9, 10],
//     [9, 11],
//     [4, 3],
//     [6, 5],
//     [4, 6],
//     [8, 9],
//   ]
// );
// 5

solution(
  [0, 0, 0],
  [
    [0, 1],
    [0, 2],
  ]
);
