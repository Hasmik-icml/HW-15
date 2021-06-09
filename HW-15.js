const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];
const array3 = ['d1', 'e1', 'f1'];

function concat(...arg){
  let newArr = [];
  for(let element of arg){
    for (let elem of element)
       newArr.push(el);
  }
  return newArr;
}
console.log(concat(array1, array2, array3));