function solution(s) {
  const splited = s.split(' ')
  let max = -Infinity
  let min = Infinity
  splited.map((el) => {
    const compare = Number(el)
    if (compare > max) max = compare
    if (compare < min) min = compare
  })
  return max + ' ' + min
}
