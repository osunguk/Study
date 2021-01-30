function computeSquareRoot(num) {
    // TODO: 여기에 코드를 작성합니다.
    let result = 0;
  
    let next = 1;
    while(next**2 < num){
      next += 1;
      if(next**2 === num) return next;
    }
    
    let start = next - 1
    
    let squared = (start + next)/2
    console.log(squared)

    
    while(Math.abs(num - squared**2) > 0.001) {
      // console.log(squared);
      // console.log(squared*squared);
      if(squared**2 > num) {
        next = squared
      } else if(squared**2 < num) {
        start = squared
      }
      squared = (next + start)/2
    }
    // console.log(squared)
    return squared.toFixed(2);
}

console.log(computeSquareRoot(5));

console.log(2.125**2);