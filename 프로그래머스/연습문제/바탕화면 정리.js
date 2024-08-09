function solution(wallpaper) {
  const colLen = wallpaper.length
  const rowLen = wallpaper[0].length

  let top = -1
  let bottom = -1
  let left = -1
  let right = -1

  for (let index in wallpaper) {
    if (top === -1 && wallpaper[index].indexOf('#') !== -1) {
      top = parseInt(index)
      break
    }
  }
  for (let index in wallpaper) {
    let revert = colLen - index - 1
    if (bottom === -1 && wallpaper[revert].indexOf('#') !== -1) {
      bottom = revert + 1
      break
    }
  }

  for (let i = 0; i < rowLen; i++) {
    for (let j = 0; j < colLen; j++) {
      if (left === -1 && wallpaper[j][i] === '#') {
        left = i
        break
      }
    }
  }

  for (let i = rowLen - 1; i >= 0; i--) {
    for (let j = colLen - 1; j >= 0; j--) {
      if (right === -1 && wallpaper[j][i] === '#') {
        right = i + 1
        break
      }
    }
  }

  return [top, left, bottom, right]
}

// const answer = solution([
//   '..........',
//   '.....#....',
//   '......##..',
//   '...##.....',
//   '....#.....',
// ])
// console.log(answer)

const anser = solution(['..', '#.'])
console.log(anser)
