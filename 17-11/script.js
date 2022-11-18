
const primary_btn = document.querySelector('#primary-btn');
const secondary_btn = document.querySelector('#secondary-btn');
const success_btn = document.querySelector('#success-btn');
const container = document.querySelector('#notification-container');
const addItemBtn = document.querySelector('#add-item-btn');
const myList = document.querySelector('#my-list');


const showNotification = ({
    className = "notification-primary",
    text = "Test text",
}) => {

    const newNotification = document.createElement('div');
    newNotification.classList.add('notification');
    newNotification.classList.add(className);
    newNotification.innerHTML = text;   

    const closeBtn = document.createElement('button') 
    closeBtn.classList.add('close-btn');
    closeBtn.innerHTML='X' 

    newNotification.append(closeBtn);
    container.append(newNotification);

    closeBtn.addEventListener('click',() => {
        newNotification.remove()
    })

    setTimeout(() => {
        newNotification.remove()

    }, 3000);
};

function addItem({
    className = 'list-item',
    text = 'List item'
}){
    const elem = document.createElement('li');
    elem.classList.add(className);
    elem.textContent=text;

    myList.append(elem);
}

primary_btn.addEventListener('click', () => {
    showNotification({className:'notification-primary'});
})

secondary_btn.addEventListener('click', () => {
    showNotification({className:'notification-secondary'});
})

success_btn.addEventListener('click', () => {
    showNotification({className:'notification-success'});
})

addItemBtn.addEventListener('click', () => {
    addItem({ text: 'Пункт 4' })
})