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
  /*  아래와 같은 형식으로 데이터를 만든다
  { 0: { species: 'sheep', chilNode: [ 1, 8 ] },
  1: { species: 'sheep', chilNode: [ 2, 4 ] },
  2: { species: 'wolf', chilNode: [] },
  3: { species: 'wolf', chilNode: [] },
  4: { species: 'wolf', chilNode: [ 3, 6 ] },
  5: { species: 'sheep', chilNode: [] },
  6: { species: 'wolf', chilNode: [ 5 ] },
  7: { species: 'sheep', chilNode: [] },
  8: { species: 'wolf', chilNode: [ 7, 9 ] },
  9: { species: 'sheep', chilNode: [ 10, 11 ] },
  10: { species: 'wolf', chilNode: [] },
  11: { species: 'wolf', chilNode: [] } }
  */

  let max = 0;

  const recursion = (sheepCount, wolfCount, position, canGo) => {
    // sheepCount - 양 숫자
    // wolfCount - 늑대 숫자
    // position - 현재 위치
    // canGo - 방문 할 수 있는 장소를 모두 모음
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

solution(
  [0, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 1],
  [
    [0, 1],
    [1, 2],
    [1, 4],
    [0, 8],
    [8, 7],
    [9, 10],
    [9, 11],
    [4, 3],
    [6, 5],
    [4, 6],
    [8, 9],
  ]
);
// 5

// solution(
//   [0, 0, 0],
//   [
//     [0, 1],
//     [0, 2],
//   ]
// );
