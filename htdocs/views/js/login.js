document.getElementById("login-form").addEventListener('submit', async (e) => {
    let loginForm = document.getElementById("login-form");
    e.preventDefault();   //prevent submit
    response = await validateForm(loginForm);   //if false - validation failed
    if (response) loginForm.submit();    //force submit

    /*It's impossible to prevent submit after async function, so I'm doing it at the beginning
    and then forcing it if validation passed*/
});

async function validateForm(registerForm) {

    if (!validateForEmptyFields(registerForm)){
        alert("Please, submit required data");
        return false;
    };

    return true;
}

function validateForEmptyFields(registerForm){
    if ( (registerForm["username"].value != "") && (registerForm["password"].value != "") ) {
        return true;
    };
    return false;
}