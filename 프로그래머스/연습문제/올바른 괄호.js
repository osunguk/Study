function solution(s) {
  let cnt = 0
  for (let i = 0; i < s.length; i++) {
    if (cnt === 0 && s[i] === ')') return false
    if (s[i] === '(') {
      cnt = cnt + 1
    } else {
      cnt = cnt - 1
    }
  }
  if (cnt === 0) return true
  return false
}

solution('()()')
// solution('(')
// solution('(())()')
