
document.addEventListener('DOMContentLoaded', function() {
    const forumItemsContainer = document.getElementById('forumItemsContainer');
    const submitButton = document.getElementById('submitButton');

    submitButton.addEventListener('click', function() {
        user = document.getElementById('newPostUser').value.trim();
        text = document.getElementById('newPostText').value.trim();
        // if (user === '' || text === '') {
        //     alert('Please fill in both fields.');
        //     return;
        // }

        const item = document.createElement('div');
        item.className = 'forumItem';
        
        const username = document.createElement('h2');
        username.textContent = user + ': ';
        item.appendChild(username);

        const message = document.createElement('p');
        message.textContent = text;
        item.appendChild(message);
        forumItemsContainer.appendChild(item);

        newPostUser.value = '';
        newPostText.value = '';
    });
});