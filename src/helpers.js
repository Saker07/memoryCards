let createShuffledCopy = (arr) => {
  let newArr = [...arr];
  let m = newArr.length;
  while (m) {
    let i = Math.floor(Math.random() * m--);

    let t = newArr[m];
    newArr[m] = newArr[i];
    newArr[i] = t;
  }
  return newArr;
};

export { createShuffledCopy };
