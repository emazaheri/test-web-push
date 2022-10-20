self.addEventListener('push', () => {
    console.log('push event');
    self.registration.showNotification('test title', {
        body: 'test body',
        icon: 'https://cheegol.ir/favicon.ico'
    });
}
);