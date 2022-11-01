/*********** Задание-1 *********/
// let array = [1,2,5,6,88,5];
//
// let sum = 0;
//  for (let i = 0; i < array.length; i++) {
//      sum += array[i];
//  }
//  console.log(sum);

/*********** Задание-2 *********/
// let numbers = [1,2,3,4,5,6,7,8,9,10];
//
// let sum = 0;
// for (let i = 0; i < numbers.length; i++) {
//      let elem = numbers[i];
//      let kvadrat = elem * elem;
//      sum += kvadrat;
//      console.log({sum, kvadrat, elem, i});
// }
//
// console.log(sum);

/************* Задание-3 *********/

const arr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
const newArr = [];
for (let i = 0; i < arr.length; i++){
    // console.log(arr[i], arr[i] % 2 === 0)
    if (arr[i] % 2 === 0){
        console.log(arr[i])
        newArr.push(arr[i]);
    }
}
console.log(newArr);