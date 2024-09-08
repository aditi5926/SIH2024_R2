// JavaScript function to handle form submission and redirect
function handleSignIn(event) {
     event.preventDefault(); // Prevent default form submission behavior
 
     // Here you could add form validation or authentication check
 
     // Redirect to dashboard
     window.location.href = "../Dashboard/dashboard.html";
 }
 
 function signInWithGoogle() {
     // Implement Google sign-in logic or redirect to Google OAuth flow
     console.log("Google Sign-In triggered");
 }
 