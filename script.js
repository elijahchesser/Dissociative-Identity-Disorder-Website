
document.addEventListener('DOMContentLoaded', function() {
    const forumItemsContainer = document.getElementById('forumItemsContainer');
    const submitButton = document.getElementById('submitButton');
    const writePostButton = document.getElementById('writePostButton');

    submitButton.addEventListener('click', function() {
        user = document.getElementById('newPostUser').value;
        text = document.getElementById('newPostText').value;
        if (user === '' || text === '') {
            alert('Please fill in both fields.');
            return;
        }

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

    writePostButton.addEventListener('click', function() {
        const newPostContainer = document.getElementById('newPostContainer');
        newPostContainer.style.display = newPostContainer.style.display === 'block' ? 'none' : 'block';
    });

    let dPressed = false;
    let iPressed = false;
    let hPressed = false;

    document.addEventListener('keydown', function(event) {
        if (event.key === 'd') {
            dPressed = true;
        }
        if (event.key === 'i') {
            iPressed = true;
        }
        if (event.key === 'h') {
            hPressed = true;
        }
    });

    document.addEventListener('keyup', function(event) {
        if (event.key === 'd') {
            dPressed = false;
        }
        if (event.key === 'i') {
            iPressed = false;
        }
        if (event.key === 'h') {
            hPressed = false;
        }
    });
    if (dPressed) {
        console.log('d pressed');
    }

    if (dPressed && iPressed && hPressed) {
        const div = document.createElement('div');
        div.textContent = 'DIH Mode Activated';
        document.body.appendChild(div);
    }
});