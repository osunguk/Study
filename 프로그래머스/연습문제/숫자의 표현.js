function solution(n) {
  if (n < 2) return 1
  let cnt = 0
  let half = Math.floor(n / 2) + 1
  let sum = 0
  while (half > 0) {
    for (let i = half; i >= 0; i--) {
      if (sum === n) {
        half
        cnt += 1
        sum = 0
        break
      } else if (sum > n) {
        sum = 0
        break
      }
      sum += i
    }
    sum = 0
    half = half - 1
  }
  if (n > 2) return cnt + 1
  return 1
}
solution(2)
