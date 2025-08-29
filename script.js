document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const cancelBtn = document.getElementById('cancelBtn');
    const forgotPasswordLink = document.getElementById('forgotPassword');
    
    // Handle form submission
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        const textLabel = document.getElementById('textLabel').value;
        const duration = document.getElementById('duration').value;
        const dropdown = document.getElementById('dropdown').value;
        
        // Get selected radio button
        const rememberOption = document.querySelector('input[name="remember"]:checked').value;
        
        // Simple validation
        if (!username || !password) {
            alert('Please fill in all required fields');
            return;
        }
        
        // Store values in localStorage (for demo purposes)
        localStorage.setItem('username', username);
        localStorage.setItem('rememberOption', rememberOption);
        localStorage.setItem('duration', duration);
        localStorage.setItem('dropdown', dropdown);
        
        // Redirect to dashboard
        window.location.href = 'dashboard.html';
    });
    
    // Handle cancel button
    cancelBtn.addEventListener('click', function() {
        if(confirm('Are you sure you want to cancel? All entered data will be lost.')) {
            loginForm.reset();
        }
    });
    
    // Handle forgot password
    forgotPasswordLink.addEventListener('click', function(e) {
        e.preventDefault();
        alert('Password reset functionality would be implemented here.');
    });
    
    // Add focus effects to inputs
    const inputs = document.querySelectorAll('input');
    inputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.parentElement.classList.add('focused');
        });
        
        input.addEventListener('blur', function() {
            this.parentElement.classList.remove('focused');
        });
    });
});
