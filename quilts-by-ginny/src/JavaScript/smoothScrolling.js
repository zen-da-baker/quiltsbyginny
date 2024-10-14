document.querySelectorAll('a[href^="#home"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior:'smooth'
        });
    });
});

document.querySelectorAll('a[href^="#quilts"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior:'smooth'
        });
    });
});

document.querySelectorAll('a[href^="#contact"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior:'smooth'
        });
    });
});

document.querySelectorAll('location[href^="#home"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior:'smooth'
        });
    });
});

document.querySelectorAll('location[href^="#quilts"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior:'smooth'
        });
    });
});

document.querySelectorAll('location[href^="#contact"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior:'smooth'
        });
    });
});