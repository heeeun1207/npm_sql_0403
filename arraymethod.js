
// //! 배열과 메서드
// 선형 검색을 통해 배열에 특정 요소(target)가 존재하는지 확인한다.
// 배열에 특정 요소가 존재하면 특정 요소의 인덱스를 반환하고 , 존재하지 않으면 -1을 반환한다.
function linearSearch(array, target){
  const length =array.length;

  for(let i =0; i< length; i ++){
    if(array[i] === target) return i;
  }
  return -1;
}
console.log(linearSearch([1,2,3,4,5,6],3));    //2 (0.1.2 인덱스)
console.log(linearSearch([1,2,3,4,5,6],0));    // return -1 

console.log(Object.getOwnPropertyDescriptor([1,2,3]));

// const arr =[
//   'string',
//   10,
//   true,
//   null,
//   undefined,
//   NaN,
//   Infinity,
//   [],
//   {},
//   function(){}
// ];
// console.log(arr);


//희소배열 
// const arr =[1, ,3 ];
// console.log(Object.getOwnPropertyDescriptor(arr[0]));  
 
//! 배열 요소 추가와 갱신 
// const arr = [0];
// //배열 요소의 추가 
// arr[2] = 3;
// console.log(arr);   // [ 0, < 1 empty item >, 3 ]
// console.log(arr.length); // 3 

// const arr =[0];
// arr[100] = 100;
// console.log(arr); // [ 0, <99 empty items>, 100 ]
// console.log(arr.length); //101
//! 배열메서드 시작 
// 1.
// const arr = [1];
// arr.push(2);
// console.log(arr); // [1,2]
// 2.
// const result = arr.concat(3);
// console.log(arr); // [1,2]
// console.log(result); // [1,2,3]

//!Array.isArray
Array.isArray([1,2]);
Array.isArray(new Array());




