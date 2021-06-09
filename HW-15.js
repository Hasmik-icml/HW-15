const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];
const array3 = ['d1', 'e1', 'f1'];
const array4 = ['d1', 'e1', 'f1'];
const array5 = ['d1', 'e1', 'f1'];
const array6 = array1.concat(array2, array3, array4, array5);
//  console.log(array4);


function concat(...arg){
  let newArr = [];
  for(let element of arg){
    for (let elem of element)
       newArr.push(elem);
  }
  return newArr;
}
console.log(concat(array1, array2, array3, array4, array5));