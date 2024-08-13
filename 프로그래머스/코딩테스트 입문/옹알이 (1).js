const str = 'Hello World'
const pattern = /World/
const result = pattern.test(str)

function solution(babbling) {
  const CanBabbling = ['aya', 'ye', 'woo', 'ma']
  let answer = 0

  for (let i of babbling) {
    let check = i

    for (let j of CanBabbling) {
      check = check.replace(j, ' ')
    }
    if (check.trim() === '') answer++
  }
  return answer
}

solution(['ayaye', 'uuuma', 'ye', 'yemawoo', 'ayaa'])
