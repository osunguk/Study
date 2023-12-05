function solution(targets) {
  let cnt = 0
  targets.sort((a, b) => {
    if (a[0] !== b[0]) {
      return b[0] - a[0]
    }
    const sizeA = a[1] - a[0]
    const sizeB = b[1] - b[0]
    return sizeB - sizeA
  })
  targets

  while (targets.length) {
    const point = targets.pop()
    point
    if (!targets.length) {
      cnt += 1
      break
    }
    point
    let [first, last] = point
    last
    while (
      targets[targets.length - 1] &&
      targets[targets.length - 1][0] < last
    ) {
      remove = targets.pop()
      if (last > remove[1]) {
        last = remove[1]
      }
    }
    cnt += 1
  }
  cnt
  return cnt
}

solution([
  [4, 5],
  [4, 8],
  [10, 14],
  [11, 13],
  [5, 12],
  [3, 7],
  [1, 4],
])

// solution([
//   [1, 5],
//   [2, 4],
//   [3, 4],
//   [4, 5],
// ])
