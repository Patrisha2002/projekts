document.getElementById("product_form").addEventListener('submit', async (e) => {
    let productForm = document.getElementById("product_form");
    e.preventDefault();   //prevent submit
    response = await validateForm(productForm);   //if false - validation failed
    if (response) productForm.submit();    //force submit

    /*It's impossible to prevent submit after async function, so I'm doing it at the beginning
    and then forcing it if validation passed*/
});

document.getElementById("button-cancel-product").onclick = function () {
    location.href = "/";
};

async function validateForm(productForm) {

    response = await checkForSkuDuplicate(productForm["sku"].value);
    if (JSON.parse(response).message == "Duplicate SKU"){    //getting Response object from PHP in JSON format
        alert("Product with same SKU already exist");
        return false;
    };

    if (!validateForEmptyFields(productForm)){
        alert("Please, submit required data");
        return false;
    };

    if (!validateDataTypes(productForm) || !validateDataInput(productForm)){     //true - passes validation => if (!true or !true) => won't go into if;
        alert("Please, provide the data of indicated type");
        return false;
    };

    return true;
}

function validateForEmptyFields(productForm){
    if ( (productForm["sku"].value != "") && (productForm["name"].value != "") && (productForm["price"].value != "")) {
        return true;
    };
    return false;
}

function validateDataTypes(productForm){

    strSku = Number(productForm["sku"].value);     // Number(String) = NaN
    strName = Number(productForm["name"].value);
    if (isNaN(strSku) && isNaN(strName)){
        return true;
    }
    return false;
}

function validateDataInput(productForm){
    if (productForm["price"].value > 0){
        return true;
    };
    return false;
}

async function checkForSkuDuplicate(sku){

    let response = 0;
    await $.ajax({
        type: 'POST',
        url: '/checkForDuplicateSku',
        data: sku,
        success: function(resp) {
            response = resp;
        }
    });

    return response;
}