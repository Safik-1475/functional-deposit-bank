
// Add Event Handler 

document.getElementById('submit-form').addEventListener('click', function () {
    // get user email 
    const userEmailField = document.getElementById('user-email');
    const userEmail = userEmailField.value;
    // get user password
    const userPasswordField = document.getElementById('user-password');
    const userPassword = userPasswordField.value;
    // statement condition
    if (userEmail == 'safikurrahman1475@gmail.com' && userPassword == 'function$1475') {
        //console.log('Login successfull')
        window.location.href = 'bank.html'
    }
    else {
        alert('Please check your email or password')
    }
})

