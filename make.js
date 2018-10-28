function make(a, ...arr) {
  
  let fn = function(...arrObj) {
    if (typeof arrObj[0] === 'function') return a.reduce(arrObj[0]);
    if (a instanceof Array !== true) return make([a].concat(arrObj));
    return make(a.concat(arrObj));
  };
  
  return fn;
}

function sum(a, b) {
  return a + b;
}