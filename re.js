document.getElementById('name').addEventListener('blur', validateName);
document.getElementById('Zipcode').addEventListener('blur', validatezipcode);
document.getElementById('Email').addEventListener('blur', validateEmail);
document.getElementById('Phone').addEventListener('blur', validatePhone);



function validateName(){
    const name = document.getElementById('name');
    const re = /^[a-zA-Z]{2,10}$/;
    if (!re.test(name.value)){
        name.classList.add('is-invalid');
    }else{
        name.classList.remove('is-valid');
    }
}

function validatezipcode(){
    const zip = document.getElementById('Zipcode');
    const re = /^[0-9]{5}(-[0-9]{4})?$/
    if (!re.test(zip.value)){
        zip.classList.add('is-invalid');
    }else{
        zip.classList.remove('is-invalid');
    }
}

function validateEmail(){
    const email = document.getElementById('Email');
    const re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)$/;
    if (!re.test(email.value)){
        email.classList.add('is-invalid');
    }else{
        email.classList.remove('is-invalid');
    }
}

function validatePhone(){
    const phone = document.getElementById('Phone');
    const re = /^\(?\d{3}\)?[-.]?\d{3}[-.]?\d{4}$/;
    if (!re.test(phone.value)){
        phone.classList.add('is-invalid');
    }else{
        phone.classList.remove('is-invalid');
    }
}

