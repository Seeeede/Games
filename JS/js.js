function validateForm() {
    const fullname = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;

    // Validate fullname (accepts only letters)
    const fullnameRegex = /^[a-zA-Z ]+$/;
    if (!fullname.match(fullnameRegex)) {
        alert('Name must be LETTERS with no symbols');
        return false;
    }

    // Validate phone (accepts only 9 digits)
    const phoneRegex = /^\d{9}$/;
    if (!phone.match(phoneRegex)) {
        alert('Phone number must be 9 numbers & does not include any charcters');
        return false;
    }

    // Validate email (contains @ and .com, .org, or .net)
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com|org|net)$/;
    if (!email.match(emailRegex)) {
        alert('This E-mail is not avalible');
        return false;
    }
    return true;
}