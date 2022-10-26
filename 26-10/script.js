/************ && (И)  *********/

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



/*********** ||(Или) *********/

name == "aizada" || age > 16 //? true
true || true //? true

name == "aizada" || age < 16 //? true
true || false //? true

name != "aizada" || age > 16 //? true
false || true //? true

name != "aizada" || age < 16 //? false
false || false //? false


//? 1) Переделать этот код так, чтобы в нем были операторы 
//?    инкремента и декремента:
let num1 = 10;
// num1 = num1 + 1;
num1++;
// num1 = num1 + 1;
num1++;
// num1 = num1 - 1;
num1--;

console.log(num1);

//? 2) Переделайте этот код так, чтобы в нем использовались 
//? операторы присвоения:
let num2 = 47;
// num2 = num2 + 7;
num2 += 7;
// num2 = num2 - 18;
num2 -= 18;
// num2 = num2 * 10;
num2 *= 10;
// num2 = num2 / 15;
num2 /= 15;
alert(num2);

//? 3) Переделайте приведенный код так,
//? чтобы в нем использовались операции 
//? +=, -=, *=, /=, ++, --. 
//? Количество строк кода при этом не должно измениться. 
//? Код для переделки:
let num3 = 1;
// num3 = num3 + 12;
num3 += 12;
// num3 = num3 - 14;
num3 -= 14;
// num3 = num3 * 5;
num3 *= 5;
// num3 = num3 / 7;
num3 /= 7;
// num3 = num3 + 1;
num3++;
// num3 = num3 - 1;
num3--;
alert(num3);