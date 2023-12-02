function solution(n) {
  const dic = { 0: 0n, 1: 1n }
  let i = 2

  while (i !== n + 1) {
    dic[i] = dic[i - 2] + dic[i - 1]
    i++
  }

  return dic[n] % 1234567n
}

const temp = solution(20)
temp

console.log(9227465 % 1234567)
