const array = [1, 3, 2, 5, 4, 9, 8, 7, 10, 22];

function fastSort(array) {
  const lessArr = [];
  const moreArr = [];
  const supportElm = array[0];

  if (array.length < 2) {
    return array;
  }

  for(let i = 1; i < array.length; i++) {
    if(array[i] > supportElm) {
      moreArr.push(array[i]);
    } else {
      lessArr.push(array[i]);
    }
  }
  
  return fastSort(lessArr).concat(supportElm, fastSort(moreArr));
}
