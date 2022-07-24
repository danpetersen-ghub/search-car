let array = [{a:1, b:2,c:3},{a:1, b:2,c:3},{a:1, b:2,c:3} ]

//let body = document.getElementById('body');
//body.innerHTML = array[0].a;

//Map takes an array and returns a new array with the results of the callback function 
let array2 = array.map(element => element.a  );//[1, 1, 1]
console.log(array2);

let array3 = array.flatMap(element => [{a:element.a,  b:element.b }]  );
/* [
[{
  a: 1,
  b: 2
}], [{
  a: 1,
  b: 2
}], [{
  a: 1,
  b: 2
}]
] */
console.log(array3);


let array4 = array.flatMap(element => [element.a,  element.b ]  ); // [1, 2, 1, 2, 1, 2]
console.log(array4);



//Map takes an array and returns a new array with the results of the callback function 
let array5 = array.map(element => `<div>${element.b}</div>`  ); //[ '<div>2</div>', '<div>2</div>', '<div>2</div>' ]
console.log(array5);



//Map takes an array and returns a new array with the results of the callback function 
let array6 = array.map( ({a,b}) => `<div>${b},${a}</div>`   ); //[ '<div>2</div>', '<div>2</div>', '<div>2</div>' ]
console.log(array6);