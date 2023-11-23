function solution(s) {
  const splited = s.split(' ')
  let max = -Infinity
  let min = Infinity
  splited.map(el => {
    if(el > max) max = el;
    if(el <min) min = el;
  })
  max
  min

  return max+' '+min;
}


solution("1 2 3 4")
