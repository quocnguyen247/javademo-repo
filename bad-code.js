// bad-code.js
function isPasswordStrong(password) {
    return password.length >= 12 && /[A-Z]/.test(password) && /\d/.test(password);
}