document.addEventListener('DOMContentLoaded', function() {
    loadPage('home');

    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const page = event.target.getAttribute('href').split('.')[0];
            loadPage(page);
        });
    });
});

function loadPage(page) {
    let content = '';
    switch(page) {
        case 'home':
            content = `
                <h1>Welcome to Children's Home</h1>
                <p>We provide a safe and loving environment for children in need.</p>
            `;
            break;
        case 'about':
            content = `
                <h1>About Us</h1>
                <p>Children's Home is dedicated to supporting and nurturing children.</p>
            `;
            break;
        case 'services':
            content = `
                <h1>Our Services</h1>
                <p>We offer educational programs, healthcare, and recreational activities.</p>
            `;
            break;
        default:
            content = '<h1>Page not found</h1>';
            break;
    }
    document.getElementById('content').innerHTML = content;
}

