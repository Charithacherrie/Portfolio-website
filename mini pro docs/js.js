document.addEventListener('DOMContentLoaded', () => {
    // Transition to second page after logo popup (1.5s)
    setTimeout(() => {
        document.getElementById('main-page').style.display = 'none';
        document.getElementById('second-page').style.display = 'flex';
    }, 1500);

    // Start button: Hide content, show login form, add glow to logo
    document.getElementById('start-btn').addEventListener('click', () => {
        document.getElementById('content-wrapper').style.display = 'none';
        document.getElementById('auth-container').style.display = 'block';
        document.getElementById('login-form').style.display = 'flex';
        document.getElementById('logo-second').classList.add('glow');
    });

    // Toggle to registration form
    document.getElementById('show-register').addEventListener('click', (e) => {
        e.preventDefault();
        document.getElementById('login-form').style.display = 'none';
        document.getElementById('register-form').style.display = 'flex';
    });

    // Toggle to login form
    document.getElementById('show-login').addEventListener('click', (e) => {
        e.preventDefault();
        document.getElementById('register-form').style.display = 'none';
        document.getElementById('login-form').style.display = 'flex';
    });

    // Show/hide password for login form
    document.getElementById('show-login-password').addEventListener('change', (e) => {
        const passwordField = document.getElementById('login-password');
        passwordField.type = e.target.checked ? 'text' : 'password';
    });

    // Show/hide password for registration form
    document.getElementById('show-register-password').addEventListener('change', (e) => {
        const passwordField = document.getElementById('register-password');
        passwordField.type = e.target.checked ? 'text' : 'password';
    });

    // Login button: Show modal and auto-transition
    document.getElementById('login-btn').addEventListener('click', (e) => {
        e.preventDefault();
        const modal = document.getElementById('auth-modal');
        const modalTitle = document.getElementById('modal-title');
        const modalMessage = document.getElementById('modal-message');
        modalTitle.textContent = 'Login Successful';
        modalMessage.textContent = 'Welcome back! Redirecting to your dashboard...';
        modal.style.display = 'flex';
        setTimeout(goToDashboard, 2000); // Auto-transition after 2s
    });

    // Register button: Show modal and auto-transition
    document.getElementById('register-btn').addEventListener('click', (e) => {
        e.preventDefault();
        const modal = document.getElementById('auth-modal');
        const modalTitle = document.getElementById('modal-title');
        const modalMessage = document.getElementById('modal-message');
        modalTitle.textContent = 'Registration Successful';
        modalMessage.textContent = 'Account created! Redirecting to your dashboard...';
        modal.style.display = 'flex';
        setTimeout(goToDashboard, 2000); // Auto-transition after 2s
    });
});

// Transition to dashboard
function goToDashboard() {
    document.getElementById('second-page').style.display = 'none';
    document.getElementById('auth-modal').style.display = 'none';
    document.getElementById('dashboard').style.display = 'block';
}