
const primary_btn = document.querySelector('#primary-btn');
const secondary_btn = document.querySelector('#secondary-btn');
const success_btn = document.querySelector('#success-btn');
const container = document.querySelector('#notification-container');


const showNotification = ({
    className = "notification-primary",
    text = "Test text",
}) => {

    const newNotification = document.createElement('div');
    newNotification.classList.add('notification');
    newNotification.classList.add(className);
    newNotification.textContent = text;

    const closeBtn = document.createElement('button') 
    closeBtn.classList.add('close-btn');
    closeBtn.textContent='X'  

    newNotification.append(closeBtn);
    container.append(newNotification);

    closeBtn.addEventListener('click',() => {
        newNotification.remove()
    })

    setTimeout(() => {
        newNotification.remove()

    }, 3000);
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
