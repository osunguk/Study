function solution(A, B) {
  const sortedA = A.sort((a, b) => a - b)
  const sortedB = B.sort((a, b) => a - b)
  console.log(sortedA)
  console.log(sortedB)
  const result = []
  for (let i = 0; i < A.length; i++) {
    result.push(sortedA[i] * sortedB[B.length - i - 1])
  }
  return result.reduce((acc, cur) => {
    return acc + cur
  }, 0)
}
const A = [1, 4, 2]
const B = [5, 4, 4]

solution(A, B)
// console.log(A.sort((a, b) => a - b))
