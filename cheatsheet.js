


// let aizada = "Aizada";
// const pi = 3.14;

// console.log(aizada) //? Aizada

// aizada = "Dadaday";
// console.log(aizada) //? Dadaday

// pi = 5; //! Error!!!

// let myFavoriteMovie = "Titanic"; //? camelCase (camel - верблюд)

// //! let my favorite movie = "Titanic";
// //! let 3hello = "3241324";


// let number = 42;//? Число
// let string1 = "Hello world"; //? строка
// let string2 = 'Hello world';
// let string3 = `
// Hello 
// world
// `;

// let boolean = true//? Правда (булево)
// let boolean2 = false//? Лож

// //? Зарезервированные слова нельзя 
// //? использовать при создании переменных
// //! let true = "Hello";
// //! let let = "Hello";

// let undef = undefined;//? undefined
// let nul = null;//? null


// let a;
// console.log(a) //? undefined
// console.log() //? undefined

// a = 42
// console.log(a) //? 42;

// let myBrain = null;
// console.log(myBrain) //? null





// let a = "Aizada";
// let b = "Emir";

// console.log(a, b)//? Aizada Emir

// a = b;

// console.log(a, b)//? Emir Emir

// a = "Pipisasa";

// console.log(a, b)//? Pipisasa Emir


// let a;
// console.log(a);//? undefined
// let b = null;
// console.log(b);//? null



//? number - 42, 15, 0, -145
//? string - "pipi", 'pipi', `pipi`
//? undefined - undefined
//? null - null
//? boolean - true, false


// let hello = "asdfa";
// typeof hello //? "string"
// typeof 42//? "number"
// typeof false//? "boolean"

// let num = 42;
// console.log(num)//? 42
// console.log(num + 2)//? 44
// console.log(num + num)//? 84
// console.log(num * 2)//? 84
// console.log(num / 2)//? 21
// console.log(num - 2)//? 40

// //? -----  %  -------?// Деление с остатком (возвращает остаток)

// console.log(num % 2)//? 0
// console.log(43 % 2)//? 1
// console.log(44 % 2)//? 0
// console.log(45 % 2)//? 1
// console.log(45 % 10)//? 5

// //? -----  %  -------?//


// let a = 1;

// a + 1; //? 2

// console.log(a)//? 1

// a = a + 1
// console.log(a)//? 2
// a = a + 1
// console.log(a)//? 3
// a = a + 1
// console.log(a)//? 4
// a = 1
// console.log(a)//? 1
// a = a + 5
// console.log(a)//? 6
// //a = a + 1;
// a++; //? Инкремент
// console.log(a)//? 7
// ++a;
// console.log(a)//? 8

// console.log(a++)//? 8

// console.log(a)//? 9


// console.log(++a)//? 10
// console.log(a)//? 10

// a--;//? Декремент
// console.log(a)//? 9
// console.log(a--)//? 9
// console.log(a)//? 8
// console.log(--a)//? 7
// console.log(a)//? 7
// a + 1;
// console.log(a)//? 7

// a = a + 1;
// console.log(a)//? 8
// a += 1; // a = a + 1;
// console.log(a)//? 9
// a -= 1;
// console.log(a)//? 8
// a -= 10;
// console.log(a)//? -2
// a += 100
// console.log(a)//? 98




// // a += 1;



// let a = 4

// // true
// // false

// a > 0 //? true
// console.log(a > 0)//? true

// let isABigNumber = a > 0; //? true
// console.log(isABigNumber) //? true

// let b = a + 100;
// console.log(b)//? 104

// a < 0 //? false
// a >= 0 //? true 
// a <= 0 //? false

// a == 4 //? true
// a == 5 //? false

// a = 5
// console.log(a) //? 5

// a === 5 //? true
// a == 5 //? true
// a === 4 //? false
// a == 4 //? false

// 1 == 1 //? true
// "aizda" == "aizda" //? true
// "1" == "1" //? true
// 1 == "1" //? true
// 1 === "1" //? false


// //? Постфиксный инкремент
// a++;

// // let num = 10;
// // console.log(num++); //? 10
// // console.log(num);//? 11
// // console.log(num);//? 11


// let num = 10;
// console.log(num++); //? 10
// console.log(num++); //? 11
// console.log(num);//? 12


// let num2 = 10;
// console.log(++num2); //? 11
// console.log(++num2); //? 12
// console.log(num2);//? 12


// let num3 = 10;
// let res3 = num3++;//? 10
// console.log(num3);//? 11
// console.log(res3);//? 10


// //? Постфиксный декремент
// a--;

// //? Префиксный инкремент
// ++a;

// //? Префиксный декремент
// --a;



//? ---    && (оператор и)    --- ?//
true && true === true;

let name = "aizada";
let age = 17;

name == "aizada" && age > 16 //? true
true && true //? true

name == "aizada" && age < 16 //? false
true && false //? false

name != "aizada" && age > 16 //? false
false && true //? false

name != "aizada" && age < 16 //? false
false && false //? false



//? ---    || (оператор или)    --- ?//


let name = "aizada";
let age = 17;

name == "aizada" || age > 16 //? true
true || true //? true

name == "aizada" || age < 16 //? true
true || false //? true

name != "aizada" || age > 16 //? true
false || true //? true

name != "aizada" || age < 16 //? false
false || false //? false


false || false || false || true //? true
false && false && false && true //? false
true && true && true && true //? true

42 == 21 + 21 //? true
42 != 21 + 21 //? false
42 != 44 //? true

true == true //? true
false == false //? true
false == true //? false
true == false //? false


!true //? false
!false //? true
!!true //? true
!!!true //? false
!!!!true //? true


!true == false //? true
!true == !false //? false
false == true //? false
!false == true //? true
true == true //? true
true == !true //? false

!true && true && false //? false
(false && true) && false //? false
false && false //? false



!true || true || false //? 
false || true || false //? 
(false || true) || false //? 
true || false //? true 


true && false || true //? true
false || true //? true