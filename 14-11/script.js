const notificationsContainer = document.getElementById('notifications-container');

const showNotification = ({
  html,
  className,
}) => {
  const wrapper = document.createElement('div');
  wrapper.classList.add('notification');

  if(className){
    wrapper.classList.add(className);
  }

  wrapper.innerHTML = `
    <div>${html}</div>
  `;

  notificationsContainer.append(wrapper);

  setTimeout(()=>{
    wrapper.remove(); 
  }, 1500)
}

const alertTrigger1 = document.getElementById('notification-trigger-1');
const alertTrigger2 = document.getElementById('notification-trigger-2');
const alertTrigger3 = document.getElementById('notification-trigger-3');

alertTrigger1.addEventListener('click', () => {
  showNotification({
    html: 'Hello world',
    className: 'red',
  })
});

alertTrigger2.addEventListener('click', () => {
  showNotification({
    html: 'Hello world',
    className: 'blue',
  })
});

alertTrigger3.addEventListener('click', () => {
  showNotification({
    html: 'Hello world',
    className: 'yellow',
  })
});