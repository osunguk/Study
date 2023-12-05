function solution(targets) {
  const oneWay = []
  const multiWay = []
  const dic = {}
  for (let i of targets) {
    if (Math.abs(i[0] - i[1]) === 1) {
      if (dic[`${i[0]},${i[1]}`]) {
        continue
      }
      dic[`${i[0]},${i[1]}`] = true
      oneWay.push(i)
    } else {
      multiWay.push(i)
    }
  }
  let left = []
  if (oneWay.length) {
    for (let i = 0; i < multiWay.length; i++) {
      for (let j = 0; j < oneWay.length; j++) {
        if (multiWay[i][0] <= oneWay[j][0] && multiWay[i][1] >= oneWay[j][1]) {
        } else {
          left.push(multiWay[i])
        }
      }
    }
  } else {
    left = [...multiWay]
  }

  let cnt = oneWay.length
  // 길이가 1 인 얘들은 요격을 정해진 구간에서만 할 수 있기때문에 먼저 처리
  const makeDic = (arr) => {
    const dictionary = {}
    const leftArr = [...arr]
    arr.map((el) => {
      for (let i = 0; i < el[1] - el[0]; i++) {
        if (dictionary[`${el[0] + i},${el[0] + i + 1}`]) {
          dictionary[`${el[0] + i},${el[0] + i + 1}`] += 1
        } else {
          dictionary[`${el[0] + i},${el[0] + i + 1}`] = 1
        }
      }
    })
    const pointArr = []
    for (let i in dictionary) {
      pointArr.push([i, dictionary[i]])
    }
    pointArr.sort((a, b) => a[1] - b[1])
    return { leftArr, pointArr }
  }

  let { leftArr, pointArr } = makeDic(left)

  while (leftArr.length) {
    const point = pointArr
      .pop()[0]
      .split(',')
      .map((el) => Number(el))
    leftArr = leftArr.filter((el) => {
      if (el[0] <= point[0] && el[1] >= point[1]) {
        return false
      } else {
        return true
      }
    })
    const newData = makeDic(leftArr)
    pointArr = newData.pointArr
    leftArr = newData.leftArr
    cnt += 1
  }
  return cnt
}

// solution([
//   [4, 5],
//   [4, 8],
//   [10, 14],
//   [11, 13],
//   [5, 12],
//   [3, 7],
//   [1, 4],
// ])

solution([
  [1, 2],
  [1, 3],
  [2, 4],
  [1, 13],
  [14, 22],
])

console.log()
