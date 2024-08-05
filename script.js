document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Simulate form submission
    setTimeout(() => {
        document.getElementById('feedback').textContent = `Thank you, ${name}! Your message has been sent.`;
    }, 500);
});
