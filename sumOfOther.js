function sumOfOther(arr) {
    
  let resultArr = arr.map((item, i) => {
    let sum = null;
    for (let j = 0; j < arr.length; j++) {
      if (i === j) continue;
      sum += arr[j];
    }
    return sum;
  });
    
  return resultArr;
}