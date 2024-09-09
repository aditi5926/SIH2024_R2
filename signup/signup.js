document.getElementById('signup-form').addEventListener('submit', async function(event) {
    event.preventDefault(); // Prevent form submission and page reload

    // Collect form data
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    // Validate form (additional frontend validation)
    if (password !== confirmPassword) {
        alert('Passwords do not match!');
        return;
    }

    // Construct data object to send
    const data = {
        Username: username,
        Email: email,
        PhoneNumber: phone,
        Password: password,
        ConfirmPassword: confirmPassword
    };

    try {
        // Send a POST request to the backend API
        const response = await fetch('http://localhost:4000/api/v1/auth/signup', { // Change to your backend URL
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        // Parse the response
        const result = await response.json();

        // Handle success or error messages from backend
        if (result.success) {
            alert('Signup successful! Redirecting to dashboard...');
            window.location.href = "../Dashboard/dashboard.html"; // Redirect to dashboard
        } else {
            alert(result.message); // Show the error message
        }
    } catch (error) {
        console.error('Error during signup:', error);
        alert(`Something went wrong: ${error.message}`);
    }
});
