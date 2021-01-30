function unpackGiftbox(giftBox, wish) {
  // TODO: 여기에 코드를 작성합니다.
  let result = false;
  if (wish === '' || giftBox.length === 0) {
    result = false;
  }
  console.log(giftBox);

  for (let i = 0; i < giftBox.length; i++) {
    console.log(giftBox[i]);
    if (Array.isArray(giftBox[i])) {
      console.log(giftBox[i]);
      result = false || unpackGiftbox(giftBox[i], wish);
    }
    if (giftBox[i] === wish) { 
      result = true;
    } else {
      continue;
    }
  }
  return result;
}
console.log(unpackGiftbox(['macbook', ['eyephone', [], ['postcard']], 'iphone'], 'iphone'));

