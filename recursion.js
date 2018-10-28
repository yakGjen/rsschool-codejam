function recursion(node){
  let queue = [];
  let values = [];
  queue.push(node);
  while(queue.length > 0){
    let tempNode = queue.shift();
    values.push(tempNode.value);
    if (tempNode.left){
      queue.push(tempNode.left);
    }
    if (tempNode.right){
      queue.push(tempNode.right);
    }
  }
  return values;
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
console.log(array);