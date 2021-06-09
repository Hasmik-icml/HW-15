const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];
const array3 = ['d1', 'e1', 'f1'];
const array4 = ['d1', 'e1', 'f1'];
const array5 = ['d1', 'e1', 'f1'];
const array6 = array1.concat(array2, array3, array4, array5);
  // console.log(array6.Of());


function concat(...arg){
  let newArr = [];
  let result;
  for(let i = 0; i < arg.length; ++i){
    newArr.push(arg[i]);
  }
  result = newArr.flat();
  return result;
}
console.log(concat(array1, array2, array3, array4, array5));