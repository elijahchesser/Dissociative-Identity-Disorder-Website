
document.addEventListener('DOMContentLoaded', function() {
    const forumsContainer = document.getElementById('forumsContainer');
    const submitButton = document.getElementById('submitButton');

    submitButton.addEventListener('click', function() {
        const item = document.createElement('div');
        item.className = 'forumItem';
        
        const username = document.createElement('h2');
        username.textContent = 'EvilKiwi:';
        item.appendChild(username);

        const message = document.createElement('p');
        message.textContent = 'This is a new forum post.';
        item.appendChild(message);
        forumsContainer.appendChild(item);
    });
});