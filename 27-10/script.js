
let message = prompt ('Столица Кыргызстана?');
if (message == 'Бишкек') {
    alert ('Верно');
} else {
  alert ('Не знаете?');
}


let user = prompt ('Кто пришел?');

if (user === "админ"){
    let password = prompt('Пароль?');
    if (password === 'Черный властелин'){
        alert ('Добро пожаловать');
    }else if  (password === null){
        alert('Вход отменен');
    }else if (password !== 'Черный властелин'){
        alert ('Пароль неверен');
    }  
} else if (user === null){
    alert ('Вход отменен');
} else{
    alert ('Я вас не знаю');            
}


   