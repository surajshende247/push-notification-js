const button = document.querySelector('button');

button.addEventListener('click', () => {
  Notification.requestPermission().then(perm => {
    if (perm === 'granted') {
      console.log('Notification permission granted');
      const notification = new Notification('Example Notification', {
        icon: 'https://cdn.pixabay.com/photo/2016/03/31/19/58/avatar-1295429_960_720.png',
        body: 'Notification from the Web Notification API',
        data: {
          url: 'https://example.com'
        },
        tag: 'example-notification'
      })
      // access the data property of the notification object
      // console.log(notification.data.url)
    }
  })
});
