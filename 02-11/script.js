/********* Задание -1 ********/
function hello(){
  alert('Привет, JavaScript!');
}
hello();



// /********* Задание -2 ********/

function cube(num) {
	return num * num * num
}

let result = cube (7);
alert(result)



/********* Задание -3 ********/ 
function getName (name = 'гость'){
  alert(`привет, ${name}`); 
}
getName ('Василий')
getName ()
