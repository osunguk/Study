function solution(picks, minerals) {
  const divide = []
  for (let i = 0; i <= Math.floor(minerals.length / 5); i++) {
    const sliced = minerals.slice(i * 5, (i + 1) * 5)
    divide.push(sliced)
  }
  let pickCnt = picks.reduce((acc, cur) => {
    return acc + cur
  }, 0)
  while (pickCnt < divide.length) {
    divide.pop()
  }
  let procced = divide.map((el) => {
    return el.reduce(
      (acc, cur) => {
        if (cur === 'diamond') {
          acc['diamond'] += 1
          acc['iron'] += 5
          acc['stone'] += 25
        }
        if (cur === 'iron') {
          acc['diamond'] += 1
          acc['iron'] += 1
          acc['stone'] += 5
        }
        if (cur === 'stone') {
          acc['diamond'] += 1
          acc['iron'] += 1
          acc['stone'] += 1
        }
        return acc
      },
      { diamond: 0, iron: 0, stone: 0 } // 도끼별 피로도 측정
    )
  })
  const sorted = procced.sort((a, b) => a.stone - b.stone)
  let answer = 0
  while (pickCnt !== 0 || !sorted.length) {
    const target = sorted.pop()
    if (!target) break
    if (picks[0]) {
      // diamond
      answer += target.diamond
      picks[0] -= 1
      pickCnt -= 1
    } else if (picks[1]) {
      // iron
      answer += target.iron
      answer
      picks[1] -= 1
      pickCnt -= 1
    } else {
      // stone
      answer += target.stone
      picks[2] -= 1
      pickCnt -= 1
    }
  }
  return answer
}
a = [0, 0, 1]
console.log(b.length)

// solution(a, b)
// 12

c = [0, 1, 0]
d = ['iron', 'iron', 'iron', 'iron', 'iron', 'diamond']

solution(c, d)
// 50
