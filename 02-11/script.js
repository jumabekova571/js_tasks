/********* Задание -1 ********/
function hello(){
  console.log ('Привет, JavaScript!');
}
hello();



// /********* Задание -2 ********/

function cube(num) {
	return num * num * num
}

let result = cube (7);
console.log(result)



/********* Задание -3 ********/ 
function getName (name = 'гость'){
  console.log(`привет, ${name}`); 
}
getName ('Василий')
getName ()
