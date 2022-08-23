document.getElementById('button-tittle').addEventListener('click', function () {
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;
    if (email === 'shamim401897@gmail.com' && password === 'sha401897') {
        window.location.href = 'bank.html';
    }
    else {
        alert("Email or Pasword wrong.So, you don't get money");
    }
})