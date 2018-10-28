let result = [];
  let b = 1;
function recursion(...data) {
  let smth = [];
  let arr = [];
  
  if (data[0] instanceof Array) {
    data[0].forEach((item, i) => {
      smth.push(data[0][i].value);

      if( data[0][i].left && data[0][i].right) {
        arr.push(data[0][i].left);
        arr.push(data[0][i].right);
      }
    });
    result.push(smth);
  } else {
    data.forEach((item, i) => {
      smth.push(data[i].value);

      if( data[i].left && data[i].right) {
        arr.push(data[i].left);
        arr.push(data[i].right);
      }
    });
    result.push(smth);
  }
  
  //result.push(smth);
  
  let a = arr.every(item => {
    //console.log(item !== undefined);
    return item !== undefined;
  });
  //console.log(a);
  if (b <= 2) {
    b++;
    recursion(arr);
  }
  
  
  return result;
}
  
let tree = {
  "value": 100,
  "left": {
    "value": 90,
    "left": {
      "value": 70
    },
    "right": {
      "value": 99
    }
  },
  "right": {
    "value": 120, 
    "left": {
      "value": 110
    },
    "right": {
      "value": 130
    }
  }
};
  
let array = recursion(tree);
console.log(array); // [[100], [90, 120], [70,99,110,130]]