document.addEventListener('DOMContentLoaded', () => {
    // Slide transition to second page after logo popup (2.5s)
    setTimeout(() => {
        const mainPage = document.getElementById('main-page');
        const secondPage = document.getElementById('second-page');
        mainPage.style.transform = 'translateX(-100%)';
        secondPage.style.display = 'flex';
        secondPage.style.transform = 'translateX(0)';
        setTimeout(() => {
            mainPage.style.display = 'none';
        }, 500);
    }, 2500);

    // Start button: Show login form
    document.getElementById('start-btn').addEventListener('click', () => {
        document.getElementById('content-wrapper').style.display = 'none';
        document.getElementById('login-form').style.display = 'flex';
    });

    // Login button: Update title with username and simulate login
    document.getElementById('login-btn').addEventListener('click', (e) => {
        e.preventDefault();
        const email = document.getElementById('login-email').value.split('@')[0];
        const password = document.getElementById('login-password').value;
        if (email && password) {
            document.getElementById('login-title').textContent = `Welcome, ${email}!`;
            goToDashboard();
        } else {
            alert('Please enter valid credentials.');
        }
    });

    // Register link: Show register form
    document.getElementById('register-link').addEventListener('click', (e) => {
        e.preventDefault();
        document.getElementById('login-form').style.display = 'none';
        document.getElementById('register-form').style.display = 'flex';
    });

    // Show/Hide Password
    document.getElementById('show-password').addEventListener('change', (e) => {
        const passwordField = document.getElementById('login-password');
        passwordField.type = e.target.checked ? 'text' : 'password';
    });
});

// Transition to dashboard
function goToDashboard() {
    document.getElementById('second-page').style.display = 'none';
    document.getElementById('dashboard').style.display = 'block';
}