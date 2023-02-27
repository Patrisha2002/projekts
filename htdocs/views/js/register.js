document.getElementById("register-form").addEventListener('submit', async (e) => {
    let registerForm = document.getElementById("register-form");
    e.preventDefault();   //prevent submit
    response = await validateForm(registerForm);   //if false - validation failed
    if (response) registerForm.submit();    //force submit

    /*It's impossible to prevent submit after async function, so I'm doing it at the beginning
    and then forcing it if validation passed*/
});

async function validateForm(registerForm) {

    response = await checkForUsernameDuplicate(registerForm["username"].value);
    if (JSON.parse(response).message == "Duplicate username"){    //getting Response object from PHP in JSON format
        alert("User with same username already exist");
        return false;
    };

    if (!validateForEmptyFields(registerForm)){
        alert("Please, submit required data");
        return false;
    };

    if (!validatePasswordMatch(registerForm)){
        alert("Password doesn't match");
        return false;
    };

    return true;
}

function validateForEmptyFields(registerForm){
    if ( (registerForm["username"].value != "") && (registerForm["password"].value != "") && (registerForm["confirm_password"].value != "")) {
        return true;
    };
    return false;
}

function validatePasswordMatch(registerForm){
    if (registerForm["password"].value  == registerForm["confirm_password"].value) {
        return true;
    };
    return false;
}

async function checkForUsernameDuplicate(username){

    let response = 0;
    await $.ajax({
        type: 'POST',
        url: '/checkForDuplicateUsername',
        data: username,
        success: function(resp) {
            response = resp;
        }
    });

    return response;
}