function solution(s) {
  const splited = s.toLowerCase().split(' ')
  splited
  const answer = splited
    .map((el) => {
      if (!el) return el
      return el[0].toUpperCase() + el.slice(1)
    })
    .join(' ')
  answer
  return answer
}

solution('1 unFaaollowed me   33')

const temp = 'a'.slice(1)

temp
