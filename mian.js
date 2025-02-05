document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('blog-form');
    const postsContainer = document.getElementById('posts-container');

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const title = document.getElementById('title').value;
        const content = document.getElementById('content').value;
        
        const post = {
            title: title,
            content: content,
            date: new Date().toLocaleString()
        };

        savePost(post);
        displayPost(post);
        
        form.reset();
    });

    function savePost(post) {
        let posts = JSON.parse(localStorage.getItem('posts')) || [];
        posts.push(post);
        localStorage.setItem('posts', JSON.stringify(posts));
    }

    function displayPost(post) {
        const postElement = document.createElement('div');
        postElement.classList.add('post');
        postElement.innerHTML = `
            <h2>${post.title}</h2>
            <p>${post.content}</p>
            <span>${post.date}</span>
        `;
        postsContainer.appendChild(postElement);
    }

    function loadPosts() {
        const posts = JSON.parse(localStorage.getItem('posts')) || [];
        posts.forEach(post => displayPost(post));
    }

    loadPosts();
});
