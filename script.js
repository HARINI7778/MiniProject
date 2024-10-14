document.addEventListener("DOMContentLoaded", function () {
    const links = {
        home: document.querySelector('#home'),
        about: document.querySelector('#about'),
        services: document.querySelector('#services'),
        contact: document.querySelector('#contact')
    };

    const menuToggle = document.getElementById('menu-toggle');
    const navbar = document.getElementById('navbar');

    menuToggle.addEventListener('click', () => {
        navbar.classList.toggle('hidden');
    });
    document.querySelectorAll('header ul li a').forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetSection = links[targetId]
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                
                navbar.classList.add('hidden');
            }
        });
    });
});




